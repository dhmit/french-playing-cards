import React from 'react';

const FoundationStack = ({ stack, handleFoundationClick, suit, index }) => {
    const stackIsEmpty = stack.length === 0;
    const topCard = stack[stack.length-1];
    const cardSrc = stackIsEmpty
        ? `/static/img/games/solitaire/paris/${suit}.png`
        : `/static/img/games/solitaire/paris/${topCard["card"]}${topCard["suit"]}.1.jpeg`;

    return (
        <div key={index} className='solitaireFoundation' onClick={() => handleFoundationClick(`foundation${suit}`)}>
            <img src={cardSrc}/>
        </div>
    );
};

export default FoundationStack;
