import React from "react";
import SolitaireStack from "./SolitaireStack";
import SolitaireCard from "./SolitaireCard";

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

// Helper function to shuffle an array
function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
        // Pick a remaining element.
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
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
        var cardCombos = [];
        for (var i = 0; i < cards.length; i++) {
            for (var j = 0; j < suits.length; j++) {
                var card = cards[i];
                var suit = suits[j];
                cardCombos.push([card, suit]);
            }
        }

        // Assign card objects to the tableaus and the stock
        var shuffledCards = shuffle(cardCombos);

        for (var i = 0; i < shuffledCards.length; i++) {
            var faceupCards = [0, 2, 5, 9, 14, 20, 27];
            var c = shuffledCards[i];
            // Assign cards that are faceup on each tableau
            if (faceupCards.includes(i)) {
                // Format as object so it's easy to pass into SolitaireCard constructor: {"card", "suit", "deck", 0=facedown or 1=faceup}
                var cardProps = {card: c[0], suit: c[1], deck: "paris", faceUp: 1}; // set deck as Paris for now, deal with the other decks later
                if (i === 0) {
                    t1.push(cardProps);
                } if (i === 2) {
                    t2.push(cardProps);
                } if (i === 5) {
                    t3.push(cardProps);
                } if (i === 9) {
                    t4.push(cardProps);
                } if (i === 14) {
                    t5.push(cardProps);
                } if (i === 20) {
                    t6.push(cardProps);
                } if (i === 27) {
                    t7.push(cardProps);
                }
            } 
            // Assign cards that are facedown
            else {
                var cardProps = {card: c[0], suit: c[1], deck: "paris", faceUp: 0};
                if (i === 1) {
                    t2.push(cardProps);
                } if (i > 2 && i < 5) {
                    t3.push(cardProps);
                } if (i > 5 && i < 9) {
                    t4.push(cardProps);
                } if (i > 9 && i < 14) {
                    t5.push(cardProps);
                } if (i > 14 && i < 20) {
                    t6.push(cardProps);
                } if (i > 20 && i < 27) {
                    t7.push(cardProps);
                } else if (i >= 28) {
                    st.push(cardProps);
                }
            }
            
        }

        this.state = {
            // Foundations: all cards 
            // Tableaus: faceup card is always at the end of the array (pushed to array, popped from array)
            stacks: {
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
            },

            // use this to hold on to data for a card that's being actively dragged
            // activeStack is the (string) name of the stack with the active card
            activeStack: 0,
        };

        console.log(this.state.stacks);
    };

    /* 
    Only call this when the stock stack is clicked 
    Draws a card from the stock stack and puts it in the waste stack (up to the user whether or not to leave it in the waste)
    Returns a card in the format {card: "card", suit: "suit", deck: "paris", faceUp: 0 or 1}}
    */
    drawCard = () => {
        var s = this.state.stock;
        var drawnCard = s.pop();
        var w = this.state.waste;
        w.push(drawnCard);

        this.setState({
            stacks: {
                stock: s,
                waste: w,
            }
        });
    };

    /*
    Handle a stack being clicked: either the stack clicked contains a card that will be moved, or the stack clicked
    will get a card moved to it.
    stackName is a string
    */
   // TODO: right now the function assumes that the activeStack is not an empty array
    handleStackClick = (stackName) => { 
        // // If `this.state.activeStack` is null, make the given `stackName` the activeStack.
        if (this.state.activeStack === 0) {
            this.setState({
                activeStack: stackName,
            });
        }
        // If `this.state.activeStack` is not null, transfer the most most recently added card in activeStack to the given `stackName`
        else {
            // The stack getting a card removed is the stack with the name active stack
            var activeStackName = String(this.state.activeStack);
            var stack1 = this.state.stacks[activeStackName];
            var transferCard = stack1.pop();
            // The stack getting a card added is the stack with `stackName`
            var stack2 = this.state.stacks[stackName];
            stack2.push(transferCard);

            // Create a copy of this.state.stacks and modify it
            var stacks = this.state.stacks;
            stacks[[activeStackName]] = stack1;
            stacks[[stackName]] = stack2;

            this.setState({
                // Set activeStack as null for future callbacks
                activeStack: 0,
                // Set stacks as the new modified variable (see above)
                stacks: stacks,
            });
            
            // TODO: rendering correctly, but console.log statements say otherwise?
            console.log(stackName + " gained a card");
            console.log(stackName + ": " + this.state.stacks[stackName]);
            console.log("activeStack set to 0");
            console.log("activeStack: " + this.state.activeStack);
            console.log(this.state);

            // TODO: check if any of the stacks have no faceup cards, if so then make the last card in the array faceup
        }
    };

    render() {
        var tableau1 = this.state.stacks.tableau1?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
        );

        var tableau2 = this.state.stacks.tableau2?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
        );

        var tableau3 = this.state.stacks.tableau3?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
        );

        var tableau4 = this.state.stacks.tableau4?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
        );

        var tableau5 = this.state.stacks.tableau5?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
        );

        var tableau6 = this.state.stacks.tableau6?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
        );

        var tableau7 = this.state.stacks.tableau7?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
        );

        // Check if foundations are empty
        var foundationC;
        var foundationD;
        var foundationH;
        var foundationS;
        if (this.state.stacks.foundationC.length === 0) {
            foundationC = '/static/img/games/solitaire/paris/foundationCblank.jpeg';
        } if (this.state.stacks.foundationD.length === 0) {
            foundationD = '/static/img/games/solitaire/paris/foundationDblank.jpeg';
        } if (this.state.stacks.foundationH.length === 0) {
            foundationH = '/static/img/games/solitaire/paris/foundationHblank.jpeg';
        } if (this.state.stacks.foundationS.length === 0) {
            foundationS = '/static/img/games/solitaire/paris/foundationSblank.jpeg';
        }
        

        // TODO: render all of your stacks
        return (
            <div className='solitaireBoard'>
                {/* <h3>Placeholder for now</h3>
                <SolitaireCard
                    card={"J"}
                    suit={"C"}
                    deck={"paris"}
                    faceUp={1}
                /> */}

                {/* Make all stacks side by side / inline
                Make cards within each stack in vertical block ordering */}

                <div className='tableaus'>
                    <div className='solitaireStack' onClick={() => this.handleStackClick('tableau1')}>
                        {tableau1}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleStackClick('tableau2')}>
                        {tableau2}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleStackClick('tableau3')}>
                        {tableau3}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleStackClick('tableau4')}>
                        {tableau4}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleStackClick('tableau5')}>
                        {tableau5}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleStackClick('tableau6')}>
                        {tableau6}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleStackClick('tableau7')}>
                        {tableau7}
                    </div>
                </div>

                <div className='foundations'>
                    <div className='solitaireFoundation'>
                        <img src={foundationC}/>
                    </div>
                    <div className='solitaireFoundation'>
                        <img src={foundationD}/>
                    </div>
                    <div className='solitaireFoundation'>
                        <img src={foundationH}/>
                    </div>
                    <div className='solitaireFoundation'>
                        <img src={foundationS}/>
                    </div>
                </div>


                {/* <div className='solitaireStack'>
                    <SolitaireCard
                        card={"J"}
                        suit={"C"}
                        deck={"paris"}
                        faceUp={1}
                    />
                    <SolitaireCard
                        card={"J"}
                        suit={"C"}
                        deck={"paris"}
                        faceUp={1}
                    />
                </div> */}

            </div>
        );
    };
}

export default SolitaireGame;
