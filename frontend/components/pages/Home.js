import React from "react";

const Home = () => {
    return (
    <>
        <h2> An Overview of French Playing Cards, 1650-1850 </h2>

        <span id="Collage">
            <img id="HomeImage" src={'/static/img/misc/homepageImg.png'}/>
        </span>

        <p id="HomeBlurb">
            From 1650 to 1850, the French spread enlightenment, gained and lost an empire, and 
            overthrew a centuries-old monarchy.  They also played card games.  This site explores 
            the history of French playing cards in this period as an unusual and insightful source 
            for the history of the Old Regime, the French Revolution, and early Nineteenth-Century 
            France.  It is intended to complement the research agenda of MIT History Professor 
            Jeffrey Ravel.  You will find details about manufacturing procedures, state taxation 
            policies, the material aspects of the playing cards, and the changing iconography of 
            French face cards.  A bibliography provides suggestions for further reading.  And for 
            those of you interested in gaming, we offer the opportunity to play a few of the most 
            popular card games of the period, using the historical deck of cards of your choice!
        </p>
    </>
    );
};

export default Home;
