import React from 'react';
import SolitaireCard from './SolitaireCard';

const TableauStack = ({ stack, handleTableauClick, index }) => {
    const stackIsEmpty = stack.length === 0;
    const stackCards = stack.map((c, i) =>
        <SolitaireCard
            key={i}
            card={c.card}
            suit={c.suit}
            deck={c.deck}
            faceUp={c.faceUp}
        />
    );

    return (
        <div key={index} className='tableau-stack col-1' onClick={() => handleTableauClick(`tableau${index+1}`)}>
            {stackIsEmpty ? <img src='/static/img/games/solitaire/stack-placeholder.png'/> : stackCards}
        </div>
    );
};

export default TableauStack;
