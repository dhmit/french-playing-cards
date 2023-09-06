import React from 'react';
import SolitaireCard from './SolitaireCard';

const TableauStack = ({ stack, handleTableauDrop, index, deck, dragState, setDragState }) => {
    const stackName = `tableau${index}`;

    const setDragCardIndex = (cardIndex) => {
        if (cardIndex === -1) {
            setDragState('', cardIndex);
        } else {
            setDragState(stackName, cardIndex);
        }
    };

    const stackIsEmpty = stack.length === 0;
    const stackCards = stack.map((c, i) =>
        <SolitaireCard
            key={i}
            index={i}
            card={c.card}
            suit={c.suit}
            deck={deck}
            faceUp={c.faceUp}
            draggable={c.faceUp}
            setDragCardIndex={setDragCardIndex}
            transparent={
                dragState.stackName === stackName &&
                i >= dragState.cardIndex
            }
        />
    );

    const handleDrop = (e) => {
        e.preventDefault();
        handleTableauDrop(index);
    };


    // required to allow dropping
    const handleDragOver = (e) => { e.preventDefault(); };

    return (
        <div
            key={index}
            className='tableau-stack col-1'
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            {stackIsEmpty
                ? <img
                    style={{ opacity: 0.25 }}
                    className='game-card'
                    src='/static/img/games/solitaire/stack-placeholder.jpeg'
                  />
                : stackCards}
        </div>
    );
};

export default TableauStack;
