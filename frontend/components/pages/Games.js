import React from "react";

const Games = () => {

    React.useEffect(() => {
        document.title = 'Play Games! | French Playing Cards';        
    }, []);

    return (
        <h2 className="page-header"> Play games page </h2>

    );
};

export default Games;