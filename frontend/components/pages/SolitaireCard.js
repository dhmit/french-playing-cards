import React from "react";

/*
This functional component does not manage any state or data, it only renders the card image based
on whether the card is face up or face down
Fetches the correct card image from the Soliatire img directory `/static/img/games/solitaire/`
*/

const SolitaireCard = ({card, suit, deck, faceUp}) => {
    
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
