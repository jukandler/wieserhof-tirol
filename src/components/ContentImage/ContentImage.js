import './contentImage.css';

function ContentImage({ imageMobile, imageDesktop}) {
    return (
        <picture className="content-image">
            {imageMobile &&
                <source
                    media={`(max-width: 750px)`}
                    srcSet={imageMobile}
                />
            }
            <img
                className="media--{id} image--{id}"
                src={imageDesktop}
                alt="Ferienwohnung Wieserhof in Tirol"
            />
        </picture>
    )
}

export default ContentImage;