import React from 'react';
import SolitaireCard from './SolitaireCard';

const StockWaste = ({
    stock,
    waste,
    handleStockClick,
    handleWasteClick,
    refreshStock,
    dragState,
    setDragState,
    deck
}) => {
    const stockCard = stock.length > 0
        ? <img onClick={handleStockClick} className="game-card" src='/static/img/games/solitaire/blue-back.jpeg'/>
        : <button className="btn btn-outline-dark"
                  onClick={refreshStock}>⟳</button>;

    // Waste cards are going to have cardIndex undefined
    // so they only fire a -1 here for dragEnd and mouseUp
    const setDragCardIndex = (cardIndex) => {
        if (cardIndex === -1) {
            setDragState('', -1);
        } else {
            setDragState('waste', -1);
        }
    };

    let wasteCard;
    if (waste.length > 0) {
        const wasteCardData = waste[waste.length-1];
        wasteCard = <SolitaireCard
                        card={wasteCardData.card}
                        suit={wasteCardData.suit}
                        deck={deck}
                        faceUp={true}
                        setDragCardIndex={setDragCardIndex}
                        stack="waste"
                        transparent={dragState.stackName === "waste"}
                    />;
    } else {
        wasteCard = <img className="game-card" src="/static/img/games/solitaire/stack-placeholder.png" />;
    }

    return (
        <React.Fragment>
            <div className='stock'>
                {stockCard}
            </div>
            <div className='waste' onClick={handleWasteClick}>
                {wasteCard}
            </div>
        </React.Fragment>
    );
};

export default StockWaste;
