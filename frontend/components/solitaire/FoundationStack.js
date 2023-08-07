import React from 'react';
import SolitaireCard from './SolitaireCard';

const FoundationStack = ({ stack, handleFoundationClick, suit, index, deck }) => {
    let cardData;



    if (stack.length === 0) {
        cardData = {card: 'A', suit: suit, faceUp: true};
    } else {
        cardData = stack[stack.length-1];
    }

    const card = <SolitaireCard
                    card={cardData.card}
                    suit={suit}
                    deck={deck}
                    faceUp={true}
                    active={false}
                />;

    const className =
        (stack.length === 0)
            ? "foundation-stack empty"
            : "foundation-stack"
    ;

    return (
        <div key={index} className={className} onClick={() => handleFoundationClick(`foundation${suit}`)}>
            {card}
        </div>
    );
};

export default FoundationStack;
