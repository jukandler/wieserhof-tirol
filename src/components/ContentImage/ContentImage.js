import './contentImage.css';

function ContentImage({ imageMobile, imageDesktop, alt}) {
    return (
        <picture className="content-image">
            {imageMobile &&
                <source
                    media={`(max-width: 750px)`}
                    srcSet={imageMobile}
                />
            }
            <img
                src={imageDesktop}
                alt={alt ? alt : "Ferienwohnung Wieserhof in Tirol"}
                loading="lazy"
            />
        </picture>
    )
}

export default ContentImage;