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
        ? <img className="game-card" src='/static/img/games/solitaire/blue-back.jpeg'/>
        : <button onClick={refreshStock}>Refresh Stock</button>;

    let wasteCard;
    if (waste.length > 0) {
        const wasteCardData = waste[waste.length-1];
        wasteCard = <SolitaireCard
                        card={wasteCardData.card}
                        suit={wasteCardData.suit}
                        deck={deck}
                        faceUp={true}
                        active={wasteActive}
                    />;
    } else {
        wasteCard = <img className="game-card" src="/static/img/games/solitaire/stack-placeholder.png" />;
    }

    return (
        <React.Fragment>
            <div className='stock' onClick={handleStockClick}>
                {stockCard}
            </div>
            <div className='waste' onClick={handleWasteClick}>
                {wasteCard}
            </div>
        </React.Fragment>
    );
};

export default StockWaste;
