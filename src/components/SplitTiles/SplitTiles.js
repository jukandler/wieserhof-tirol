
import ImageTile from "../ImageTile/ImageTile";
import "./splitTiles.css";

function SplitTiles({ imageTileTitle, imageDesktop, imageMobile, linkTo, textTileTitle, text, reverse = false}) {
    return (
        <section className={`split-tiles ${reverse ? "split-tiles_reverse" : ""}`}>
            <div className="split-tile-image">
                <ImageTile 
                    linkTo={linkTo}
                    title={imageTileTitle}
                    imageDesktop={imageDesktop}
                    imageMobile={imageMobile}
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