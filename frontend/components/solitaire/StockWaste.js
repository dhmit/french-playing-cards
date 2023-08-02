import React from 'react';

const StockWaste = ({ stock, waste, handleStockClick, handleWasteClick, refreshStock }) => {
    const stockCard = stock.length > 0
        ? <img src='/static/img/games/solitaire/blue-back.jpeg'/>
        : <button onClick={refreshStock}>Refresh Stock</button>;

    const wasteCard = waste.length > 0
        ? `/static/img/games/solitaire/paris/${waste[waste.length-1]["card"]}${waste[waste.length-1]["suit"]}.1.jpeg`
        : "/static/img/games/solitaire/stack-placeholder.png";

    return (
        <React.Fragment>
            <div className='solitaireStock' onClick={handleStockClick}>
                {stockCard}
            </div>
            <div className='solitaireWaste' onClick={handleWasteClick}>
                <img src={wasteCard}></img>
            </div>
        </React.Fragment>
    );
};

export default StockWaste;
