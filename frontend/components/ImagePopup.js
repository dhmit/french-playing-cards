import React from "react";
import { PropTypes } from "prop-types";

const ImagePopup = ({src, alt}) => {
    const [open, setOpen] = React.useState(false);
    const ref = React.useRef(null);

    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (open && ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside, true);

        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };

    }, [open]);

    return (
        <div>
            <img src={src} onClick={() => setOpen(true)} alt={alt} />
            
            {open && (
                <dialog className="dialog" ref={ref} style={{ position: "fixed" }} open>
                    <img className="popup-image" src={src} alt={alt} />
                </dialog>
            )}
      </div>

    );
};

ImagePopup.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};

export default ImagePopup;