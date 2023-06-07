import React from "react";
import CardSearch from "../CardSearch";


const Search = () => {

    React.useEffect(() => {
        document.title = "Search Database | French Playing Cards";        
    }, []);

    return <CardSearch />;

};

export default Search;
