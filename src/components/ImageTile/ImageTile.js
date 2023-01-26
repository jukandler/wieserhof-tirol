import { Link } from 'react-router-dom';
import './imageTile.css';

function ImageTile({ imageMobile, imageDesktop, title}) {
    return (
        <Link to="/impressum" className="image-tile">
            <h2 dangerouslySetInnerHTML={{__html: title}}></h2>
            <picture>
                <source
                    media={`(max-width: 750px)`}
                    srcSet={imageMobile}
                />
                <img
                    className="media--{id} image--{id}"
                    src={imageDesktop}
                    alt={title}
                />
            </picture>
            <p>mehr erfahren</p>
        </Link>
    )
}

export default ImageTile;