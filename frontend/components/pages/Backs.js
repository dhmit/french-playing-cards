import React from "react";

const Backs = () => {

    React.useEffect(() => {
        document.title = 'Backs | French Playing Cards';        
    }, []);

    return (
        <h2 className="page-header"> Backs page </h2>

    );
};

export default Backs;