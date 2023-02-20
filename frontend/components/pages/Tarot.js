import React from "react";

const Tarot = () => {

    React.useEffect(() => {
        document.title = 'Tarot | French Playing Cards';        
    }, []);

    return (
    <>
        <h2 className="page-header"> TAROT LANDING PAGE </h2>

        <div className="material-subpage-intro">
            <img id="tarot-mascot" src={'/static/img/tarot/tarotMascot.jpeg'}/>
            <p>
                Tarot cards appeared in Europe in the fourteenth century, and soon made their way 
                to France. The Tarot deck consisted of 78 cards: four suits consisting of four face 
                cards (King, Queen,Knight, Jack) and the Ace through ten cards, as well as 22 trump 
                cards. These decks were used to play a game similar to the modern game of bridge. 
                In the last third of the eighteenth century a new use for these decks appeared, 
                that of “cartomancy,” or divination. The links below will lead you to pages that 
                provide details about the standard deck of Tarot cards, as well as a brief history 
                of cartomancy.
            </p>
        </div>

        <div id='MaterialsMenu'>
            <div className='MaterialsMenuItem'>
                <a href='tarot/tarot-deck'> 
                    <p> The Tarot Deck </p>
                    <img src={'/static/img/tarot/tarotDeck.jpg'}/>
                </a>
            </div>

            <div className='MaterialsMenuItem'>
                <a href='tarot/tarot-history'>
                    <p> A Brief History of Cartomancy </p>
                    <img id='tarot-history-menu-img' src={'/static/img/tarot/tarotHistory.jpg'}/>
                </a> 
            </div>
        </div>
    </>
    );
};

export default Tarot;