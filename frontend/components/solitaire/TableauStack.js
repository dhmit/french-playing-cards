import React from 'react';
import SolitaireCard from './SolitaireCard';

const TableauStack = ({ stack, handleTableauDrop, index, deck }) => {
    const stackIsEmpty = stack.length === 0;
    const stackCards = stack.map((c, i) =>
        <SolitaireCard
            key={i}
            card={c.card}
            suit={c.suit}
            deck={deck}
            faceUp={c.faceUp}
            stack={`tableau${index}`}
            draggable={i === stack.length-1}
        />
    );

    const handleDrop = (e) => {
        e.preventDefault();

        // Retrieve the dragged card data from the event's dataTransfer object
        const draggedCardData = JSON.parse(e.dataTransfer.getData('application/json'));
        console.log(draggedCardData);

        handleTableauDrop(index, draggedCardData);
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
            {stackIsEmpty ? <img src='/static/img/games/solitaire/stack-placeholder.png'/> : stackCards}
        </div>
    );
};

export default TableauStack;
