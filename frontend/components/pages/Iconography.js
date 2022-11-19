import React from "react";

const Iconography = () => {

    React.useEffect(() => {
        document.title = 'Face Card Iconography | French Playing Cards';        
    }, []);

    return (
        <>
        <h2 className="page-header"> Face card iconography page </h2>
        <div id='IconographyIntro'>
            <h3>Click <a href="iconography/search">HERE</a> to access our seach page</h3>
            <img src={'/static/img/misc/iconography-image.jpeg'}/>
        </div>
        </>
    );
};

export default Iconography;