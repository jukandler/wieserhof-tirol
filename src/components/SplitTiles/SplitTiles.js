
import ImageTile from "../ImageTile/ImageTile";
import "./splitTiles.css";

function SplitTiles({ imageTileTitle, image, linkTo, textTileTitle, text, reverse = false}) {
    return (
        <section className={`split-tiles ${reverse ? "split-tiles_reverse" : ""}`}>
            <div className="split-tile-image">
                <ImageTile 
                    linkTo={linkTo}
                    title={imageTileTitle}
                    image={image}
                />
            </div>
            <div className="split-tile-text grid-text_wide">
                <h2>{textTileTitle}</h2>
                <p>{text}</p>
            </div>
        </section>
    );
}

export default SplitTiles;