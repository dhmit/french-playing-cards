import React from "react";

const Manufacture = () => {

    React.useEffect(() => {
        document.title = 'Manufacture | French Playing Cards';        
    }, []);

    return (
        <h2 className="page-header"> Manufacture page </h2>

    );
};

export default Manufacture;