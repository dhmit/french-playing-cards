import React from 'react';
import SolitaireCard from './SolitaireCard';

const FoundationStack = ({ stack, handleFoundationDrop, suit, deck, dragState, setDragState }) => {
    let cardData;

    if (stack.length === 0) {
        cardData = {card: 'A', suit: suit, faceUp: true};
    } else {
        cardData = stack[stack.length-1];
    }

    const stackName = `foundation${suit}`;
    // Foundation cards are going to have cardIndex undefined
    // so they only fire a -1 here for dragEnd and mouseUp
    const setDragCardIndex = (cardIndex) => {
        if (cardIndex === -1) {
            setDragState('', -1);
        } else {
            setDragState(stackName, -1);
        }
    };

    const card = <SolitaireCard
                    card={cardData.card}
                    suit={suit}
                    deck={deck}
                    faceUp={true}
                    active={false}
                    draggable={stack.length > 0}
                    setDragCardIndex={setDragCardIndex}
                    transparent={dragState.stackName === stackName}
                />;

    const className =
        (stack.length === 0)
            ? "foundation-stack empty"
            : "foundation-stack"
    ;

    const handleDrop = (e) => {
        e.preventDefault();
        handleFoundationDrop(suit);
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
