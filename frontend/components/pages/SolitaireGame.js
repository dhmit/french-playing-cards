import React from "react";
import SolitaireStack from "./SolitaireStack";

const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
const suits = ["C", "D", "H", "S"];
const decks = ["paris", "dugourc", "david"];
const faceUp = [0, 1];
var t1 = [];  // initial size 1
var t2 = [];  // initial size 2
var t3 = [];  // initial size 3
var t4 = [];  // initial size 4
var t5 = [];  // initial size 5
var t6 = [];  // initial size 6
var t7 = [];  // initial size 7
var st = []; // initial size 24
// TODO: maybe put this in a 2d array?

// Helper function to shuffle an array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
}

class SolitaireGame extends React.Component {
    // NOTE(Ryaan): This is the main controlling Component that
    // will handle the main logic, particularly moving cards from
    // stack to stack and initializing/managing the stacks.

    constructor(props) {
        super(props);

        // Create all possible combinations of cards and suits
        var cardCombos = []
        for (var i = 0; i < cards.length; i++) {
            for (var j = 0; j < suits.length; j++) {
                var card = cards[i];
                var suit = suits[j];
                cardProps.push([card, suit]);
            }
        }

        // Assign card objects to the tableaus and the stock
        shuffledCards = shuffle(cardCombos)

        for (var i = 0; i < shuffledCards.length; i++) {
            faceupCards = [0, 1, 3, 6, 10, 15, 21]
            c = shuffledCards[i]
            // Assign cards that are faceup on each tableau
            if (faceupCards.includes(i)) {
                // Format as object so it's easy to pass into SolitaireCard constructor: {"card", "suit", "deck", 0=facedown or 1=faceup}
                cardProps = {card: c[0], suit: c[1], deck: "paris", faceup: 1}; // set deck as Paris for now, deal with the other decks later
                if (i == 0) {
                    t1.push(cardProps);
                } if (i == 1) {
                    t2.push(cardProps);
                } if (i == 3) {
                    t3.push(cardProps);
                } if (i == 6) {
                    t4.push(cardProps);
                } if (i == 10) {
                    t5.push(cardProps);
                } if (i == 15) {
                    t6.push(cardProps);
                } if (i == 21) {
                    t7.push(cardProps);
                }
            } 
            // Assign cards that are facedown
            else {
                cardProps = {card: c[0], suit: c[1], deck: "paris", faceup: 0};
                if (i == 2) {
                    t2.push(cardProps);
                } if (i > 3 && i < 6) {
                    t3.push(cardProps);
                } if (i > 6 && i < 10) {
                    t4.push(cardProps);
                } if (i > 10 && i < 15) {
                    t5.push(cardProps);
                } if (i > 15 && i < 21) {
                    t6.push(cardProps);
                } if (i > 21 && i < 28) {
                    t7.push(cardProps);
                } else {
                    st.push(cardProps)
                }
            }
            
        }

        this.state = {
            // Foundations: faceup card is always the first element in the array
            foundationH: [],
            foundationD: [],
            foundationC: [],
            foundationS: [],
            tableau1: t1,  // initial size 1
            tableau2: t2,  // initial size 2
            tableau3: t3,  // initial size 3
            tableau4: t4,  // initial size 4
            tableau5: t5,  // initial size 5
            tableau6: t6,  // initial size 6
            tableau7: t7,  // initial size 7
            stock: st,
            waste: [], // all cards will be face up, but only the most recently added card (at the end of the array) is accessible

            // use this to hold on to data for a card that's
            // being actively dragged
            activeCard: null,
        };
    };

    /* 
    Only call this when the stock stack is clicked 
    Draws a card from the stock stack and puts it in the waste stack (up to the user whether or not to leave it in the waste)
    Returns a card in the format {card: "card", suit: "suit", deck: "paris", faceup: 0 or 1}}
    */
    drawCard = () => {
        var s = this.state.stock;
        var drawnCard = s.pop()
        var w = this.state.waste;
        w.push(drawnCard)

        this.setState({
            stock: s,
            waste: w,
        });
        return drawnCard;
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
