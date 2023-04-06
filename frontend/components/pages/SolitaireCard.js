import React from "react";

const SolitaireCard = ({card, suit, deck, faceUp}) => {
    // NOTE(Ryaan): This functional component _just_ draws a card, 
    // and doesn't need to manage any data
    
    // TODO: actually draw cards nicely
    if (faceUp) {
        var imageName = '/static/img/B/Paris/' + {card} + {suit} + '.1.jpeg';
        return (
            // <div>{card} of {suit} of {deck}</div>
            <div className='faceupCard'>
                <img src={'/static/img/B/Blason/JC.2.jpeg'}/>
            </div>
        );
    } else {
        return (
            <div className='facedownCard'>
                {/* chose a neutral back of a card for now */}
                <img src={'/static/img/B/Blason/JC.2.jpeg'}/>
            </div>
        );
    }
};

export default SolitaireCard;
