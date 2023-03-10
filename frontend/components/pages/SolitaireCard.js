import React from "react";

class SolitaireCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // OK to copy props.card, .suit, .deck to state b/c these fields will never change
            card: props.card,
            suit: props.suit,
            deck: props.deck,
            stack: "",
        };
        // TODO: will we need to filter through the database to fetch the card front/back? 
        // Or maybe easier to just have a directory pathway and the only part that changes 
        // is the name of the image (everything loaded up directly on frontend, no backend interaction?)
    };

    render() {
        return(
            <h1>placeholder for now</h1>
        );
    }
}

// TODO: add "export default <ComponentName>" ?