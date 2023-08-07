import React from 'react';
import SolitaireCard from './SolitaireCard';

const TableauStack = ({ stack, handleTableauClick, index, active, deck }) => {
    const stackIsEmpty = stack.length === 0;
    const stackCards = stack.map((c, i) =>
        <SolitaireCard
            key={i}
            card={c.card}
            suit={c.suit}
            deck={deck}
            faceUp={c.faceUp}
            active={active && (i === stack.length-1)}
        />
    );

    return (
        <div key={index} className='tableau-stack col-1' onClick={() => handleTableauClick(`tableau${index}`)}>
            {stackIsEmpty ? <img src='/static/img/games/solitaire/stack-placeholder.png'/> : stackCards}
        </div>
    );
};

export default TableauStack;
