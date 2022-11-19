import React from "react";

const Envelopes = () => {

    React.useEffect(() => {
        document.title = 'Envelopes | French Playing Cards';        
    }, []);

    return (
        <h2 className="page-header"> Envelopes page </h2>

    );
};

export default Envelopes;