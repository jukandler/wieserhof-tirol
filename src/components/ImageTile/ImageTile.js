import { Link } from 'react-router-dom';
import './imageTile.css';

function ImageTile({ image, title, linkTo}) {
    return (
        <a href={linkTo} className="image-tile">
            <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
            <picture>
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                />
            </picture>
            <p>mehr erfahren</p>
        </a>
    )
}

export default ImageTile;