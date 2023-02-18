import React from "react";
import {PropTypes} from "prop-types";

const ImageHover = ({src1, src2, alt}) => {
    const [imgSrc, setImgSrc] = React.useState(src1);

    return (
        <div>
            <img 
                src={imgSrc} 
                onMouseOver={() => setImgSrc(src2)}
                onMouseOut={() => setImgSrc(src1)}
                onClick={() => setImgSrc(src1)}
                alt={alt} 
            />
        </div>

    );
};

ImageHover.propTypes = {
    src1: PropTypes.string,
    src2: PropTypes.string,
    alt: PropTypes.string
};

export default ImageHover;