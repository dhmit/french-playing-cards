import React from 'react';

const FoundationStack = ({ stack, handleFoundationClick, suit, index }) => {
    let cardSrc;
    if (stack.length === 0) {
         cardSrc = `/static/img/games/solitaire/paris/${suit}.png`;
    } else {
        const topCard = stack[stack.length-1];
        cardSrc = `/static/img/games/solitaire/paris/${topCard["card"]}${topCard["suit"]}.1.jpeg`;
    }

    return (
        <div key={index} className='solitaireFoundation' onClick={() => handleFoundationClick(`foundation${suit}`)}>
            <img src={cardSrc}/>
        </div>
    );
};

export default FoundationStack;
