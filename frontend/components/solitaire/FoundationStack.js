import React from 'react';
import SolitaireCard from './SolitaireCard';

const FoundationStack = ({ stack, handleFoundationDrop, suit, deck }) => {
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
                    draggable={true}
                    stack={`foundation${suit}`}
                />;

    const className =
        (stack.length === 0)
            ? "foundation-stack empty"
            : "foundation-stack"
    ;

    const handleDrop = (e) => {
        e.preventDefault();
        const draggedCardData = JSON.parse(e.dataTransfer.getData('application/json'));
        console.log(draggedCardData);
        handleFoundationDrop(suit, draggedCardData);
    };

    // required to allow dropping
    const handleDragOver = (e) => { e.preventDefault(); };

    return (
        <div
            className={className}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {card}
        </div>
    );
};

export default FoundationStack;
