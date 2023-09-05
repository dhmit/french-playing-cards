import React from 'react';
import SolitaireCard from './SolitaireCard';

const StockWaste = ({
    stock,
    waste,
    handleStockClick,
    handleWasteClick,
    refreshStock,
    wasteActive,
    deck
}) => {
    const stockCard = stock.length > 0
        ? <img onClick={handleStockClick} className="game-card" src='/static/img/games/solitaire/blue-back.jpeg'/>
        : <button className="btn btn-outline-dark mr-4"
                  onClick={refreshStock}>Refresh <br/>Stock</button>;

    let wasteCard;
    if (waste.length > 0) {
        const wasteCardData = waste[waste.length-1];
        wasteCard = <SolitaireCard
                        card={wasteCardData.card}
                        suit={wasteCardData.suit}
                        deck={deck}
                        faceUp={true}
                        active={wasteActive}
                        stack="waste"
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
