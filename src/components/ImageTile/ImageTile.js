import { Link } from 'react-router-dom';
import './imageTile.css';

function ImageTile({ image, title, linkTo}) {
    return (
        <Link to={linkTo} className="image-tile">
            <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
            <picture>
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                />
            </picture>
            <p>mehr erfahren</p>
        </Link>
    )
}

export default ImageTile;