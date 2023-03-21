import React from "react";
import SolitaireStack from "./SolitaireStack";

class SolitaireGame extends React.Component {
    // NOTE(Ryaan): This is the main controlling Component that
    // will handle the main logic, particularly moving cards from
    // stack to stack and initializing/managing the stacks.

    constructor(props) {
        super(props);

        // TODO: init all of the starting data for the game
        this.state = {
            foundationStacks: [],
            stock: ,

            // use this to hold on to data for a card that's
            // being actively dragged
            activeCard: ,
        };
    };

    drawCard = () => {
        // Do something with this.state.stock
    };

    handleStackClick = (stack) => { };

    render() {
        // TODO: render all of your stacks
        return (
            <h1>placeholder for now</h1>
        );
    };
}

export default SolitaireGame;
