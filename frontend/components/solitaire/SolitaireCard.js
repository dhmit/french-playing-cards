import React from "react";

/*
This functional component does not manage any state or data, it only renders the card image based
on whether the card is face up or face down
Fetches the correct card image from the Soliatire img directory `/static/img/games/solitaire/`
*/

const SolitaireCard = ({card, suit, deck, faceUp, draggable, stack}) => {
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

    const handleDragStart = (e) => {
        e.dataTransfer.setData('application/json', JSON.stringify({ srcStack: stack }));
        e.dataTransfer.effectAllowed = "move";
    };

    return <img
                className='game-card'
                src={imgSrc}
                draggable={draggable}
                onDragStart={handleDragStart}
           />;
};

export default SolitaireCard;
