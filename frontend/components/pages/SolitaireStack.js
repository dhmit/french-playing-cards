import React from "react";
import SolitaireCard from 'SolitaireCard';

class SolitaireStack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // OK to copy props.card, .suit, .deck to state b/c these fields will never change
            name: props.name, // the name of the stack (e.g. 'stock', 'foundation')
            cards: [], // the cards within the stack - highest index is card on top of stack
            top: null, // the card at the top of the stack
        };
    };

    // When a card gets removed from a stack (e.g. drawing, moving a card from one stack to another)
    removeCard = () => {
        // Update the 'cards' field, update the 'top' field of the state to be whatever card was underneath
        updatedCards = this.state.cards;
        updatedCards.pop();
        updatedTop = updatedCards.slice(-1);
        this.setState({cards: updatedCards, top: updatedTop})
    };

    // When a card gets added to a stack (e.g. moving a card from one stack to another)
    addCard = (card) => {
        // Update the 'cards' field, update the 'top field of the state to be whatever card is getting added
        this.setState({cards: this.state.cards.push(card), top: card});
    };

    render() {
        const cards = this.state.cards.map((c, index) => 
            <SolitaireCard 
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
        );

        return (<>
            {cards}
        </>);
    };
}

export default SolitaireStack;
