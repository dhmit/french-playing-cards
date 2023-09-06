import React from "react";

/*
This functional component does not manage any state or data, it only renders the card image based
on whether the card is face up or face down
Fetches the correct card image from the Soliatire img directory `/static/img/games/solitaire/`
*/

const SolitaireCard = ({
    index, card, suit, deck, faceUp, draggable, setDragCardIndex, transparent
}) => {
    let imgSrc = "/static/img/games/solitaire/blue-back.jpeg";
    if (faceUp) {
        if (["K", "Q", "J"].indexOf(card) === -1) {
            // normal number cards from generic deck
            imgSrc = "/static/img/games/solitaire/paris/" + card + suit + ".1.jpeg";
        } else {
            // face cards from specific decks
            let baseUrl;
            if (deck === "paris") {
                baseUrl = "/static/img/B/Paris/";
            } else if (deck === "dugourc") {
                baseUrl = "/static/img/D/Dugourc/";
            } else if (deck === "david") {
                baseUrl = "/static/img/A/David/";
            }

            imgSrc = baseUrl + card + suit + ".1.jpeg";
        }
    }

    return <img
                className='game-card'
                src={imgSrc}
                draggable={draggable}
                style={transparent ? { opacity: 0.5 } : {}}
                onDragStart={() => setDragCardIndex(index)}
                onMouseUp={() => setDragCardIndex(-1)}
                onDragEnd={() => setDragCardIndex(-1)}
           />;
};

export default SolitaireCard;
