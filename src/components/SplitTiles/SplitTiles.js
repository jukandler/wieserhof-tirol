
import ImageTile from "../ImageTile/ImageTile";
import "./splitTiles.css";

import { Builder } from '@builder.io/react';

const SplitTiles = (props) => {
    console.log('props.reverse :', props.reverse);
    return (
        <section className={`split-tiles ${props.reverse ? "split-tiles_reverse" : ""}`}>
            <div className="split-tile-image">
                <ImageTile 
                    linkTo={props.tilewithimage.link}
                    title={props.tilewithimage.title}
                    image={props.tilewithimage.imageurl}
                />
            </div>
            <div className="split-tile-text grid-text_wide">
                <h2>{props.tilenoimage.title}</h2>
                <p>{props.tilenoimage.description}</p>
            </div>
        </section>
    );
}

Builder.registerComponent(SplitTiles, {
    name: 'ImageTile',
    friendlyName: "Bilder-Kacheln",
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/border-all.png',
    inputs: [
        {
            name: "tilewithimage",
            friendlyName: "Kachel mit Bild",
            type: 'object',
            defaultValue: {
                title: 'Titel auf Bild'
            },
            subFields: [
                {
                    name: 'title',
                    friendlyName: "Titel auf Bild",
                    type: 'string',
                    required: true
                },
                {
                    name: 'link',
                    friendlyName: "Link",
                    type: 'url',
                    required: true,
                },
                { 
                    name: 'imageurl',
                    friendlyName: "Bild",
                    type: 'file', 
                    allowedFileTypes: ['jpeg', 'png'],
                    required: true,
                }
            ]
        },
        {
            name: "tilenoimage",
            friendlyName: "Kachel ohne Bild",
            type: 'object',
            defaultValue: {
                title: 'Titel'
            },
            subFields: [
                {
                    name: 'title',
                    friendlyName: "Titel",
                    type: 'string',
                    required: true
                },
                {
                    name: 'description',
                    friendlyName: "Beschreibung",
                    type: 'string',
                    required: true
                },
            ]
        },
        {
            title: "reverse",
            friendlyName: "Kacheln umdrehen",
            type: "boolean",
            defaultValue: false
        }
    ]
})

export default SplitTiles;