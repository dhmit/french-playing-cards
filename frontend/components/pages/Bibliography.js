import React from "react";

const Bibliography = () => {
    
    React.useEffect(() => {
        document.title = 'Bibliography | French Playing Cards';        
    }, []);

    return (
        <h2 className="page-header"> Bibliography page </h2>

    );
};

export default Bibliography;