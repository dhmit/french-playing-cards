import React from "react";

const Home = () => {

    React.useEffect(() => {
        document.title = 'Home | French Playing Cards';        
    }, []);

    return (
    <>
        <h2 className="page-header"> French Playing Cards, 1650-1850 </h2>

        <span id="Collage">
            <img id="HomeImage" src={'/static/img/misc/homepageImg.png'}/>
        </span>

        <p id="HomeBlurb">
            From 1650 to 1850, the French spread enlightenment, gained and lost an empire, and 
            overthrew a centuries-old monarchy.  They also played card games.  This site explores 
            the history of French playing cards in this period as an unusual and insightful source 
            for the history of the Old Regime, the French Revolution, and early Nineteenth-Century 
            France.  You will find details about <a href='manufacture'>manufacturing procedures</a>, state taxation 
            policies, the <a href='material-aspects'>material aspects</a> of the playing cards, and the changing <a href='iconography'>iconography</a> of 
            French face cards.  A <a href='bibliography'>bibliography</a> provides suggestions for further reading.  And for 
            those of you interested in gaming, we offer the opportunity to play a few of the most 
            popular <a href='games'>card games</a> of the period, using the historical deck of cards of your choice!
        </p>
    </>
    );
};

export default Home;
