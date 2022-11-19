import React from "react";

const About = () => {

    React.useEffect(() => {
        document.title = 'About | French Playing Cards';        
    }, []);

    return (
        <h2 className="page-header"> About page </h2>

    );
};

export default About;