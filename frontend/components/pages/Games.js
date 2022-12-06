import React from "react";

const Games = () => {

    React.useEffect(() => {
        document.title = 'Play Games! | French Playing Cards';        
    }, []);

    return (
        <>

        <h2 className="page-header"> Play games page </h2>

        <div className="material-subpage-intro">
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p className="material-subpage-blurb">
                In progress...
            </p>
        </div>

        </>
    );
};

export default Games;