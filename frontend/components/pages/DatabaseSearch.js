import React from "react";
import CardSearch from "../CardSearch";
import Tabs from "../Tabs";

const Search = () => {

    React.useEffect(() => {
        document.title = 'Search Database | French Playing Cards';        
    }, []);

    return (
        <>
            <CardSearch/>
        </>

    );
};

export default Search;