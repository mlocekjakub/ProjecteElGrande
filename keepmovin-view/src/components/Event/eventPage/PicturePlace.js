import React from 'react';

function PicturePlace(props) {
    return (
        <div className="grid-container-image">
            <img
                src={props.src}
                srcSet=""
                alt=""
                loading="lazy"
            />
        </div>);
}

export default PicturePlace;