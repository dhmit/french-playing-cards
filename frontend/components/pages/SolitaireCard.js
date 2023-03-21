import React from "react";

const SolitaireCard = ({card, suit, deck, faceUp}) => {
    // NOTE(Ryaan): This functional component _just_ draws a card, 
    // and doesn't need to manage any data
    
    // TODO: actually draw cards nicely
    if (faceUp) {
        return (
            <div>{card} of {suit} of {deck}</div>
        );
    } else {
        return (
            <div>a facedown card</div>
        );
    }
}

export default SolitaireCard;
