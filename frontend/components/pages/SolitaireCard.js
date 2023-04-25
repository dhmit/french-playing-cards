import React from "react";

const SolitaireCard = ({card, suit, deck, faceUp}) => {
    // NOTE(Ryaan): This functional component _just_ draws a card, 
    // and doesn't need to manage any data
    
    if (Boolean(faceUp)) {
        var cardStr = String(card);
        var suitStr = String(suit);
        var imageName = '/static/img/games/solitaire/paris/' + cardStr + suitStr + '.1.jpeg';
        return (
            <div className='solitaireCard'>
                <img src={imageName}/>
            </div>
        );
    } else {
        return (
            <div className='solitaireCard'>
                <img src={'/static/img/games/solitaire/blue-back.jpeg'}/>
            </div>
        );
    }
};

export default SolitaireCard;
