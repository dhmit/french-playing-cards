import React from "react";

const SolitaireCard = ({card, suit, deck, faceUp}) => {
    // NOTE(Ryaan): This functional component _just_ draws a card, 
    // and doesn't need to manage any data
    
    if (Boolean(faceUp)) {
        var cardStr = String(card);
        var suitStr = String(suit);
        // TODO: Default for cards 1-10 is King, deal with getting the right card images later
        if (cardStr !== 'A' || cardStr !== 'K' || cardStr !== 'Q' || cardStr !== 'J') {
            cardStr = 'K';
        }
        var imageName = '/static/img/games/solitaire/paris/' + cardStr + suitStr + '.1.jpeg';
        return (
            // <div>{card} of {suit} of {deck}</div>
            <div className='solitaireCard'>
                <img src={imageName}/>
            </div>
        );
    } else {
        return (
            <div className='solitaireCard'>
                {/* chose a neutral back of a card for now */}
                <img src={'/static/img/B/Blason/JC.2.jpeg'}/>
            </div>
        );
    }
};

export default SolitaireCard;
