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

// Helper function to check if a card value is greater than the other
// c1 and c2 are both strings, e.g. "1" "2" "K" "A"
// Return true if c1 = (c2 + 1) and false otherwise 
function compareCards(c1, c2) {
    // if c1 and c2 are the same then return false
    if (c1 === c2) {
        return false;
    }

    c1 = cards.indexOf(c1);
    c2 = cards.indexOf(c2);

    if (c1 === (c2+1)) {
        return true;
    }
    return false;
}

// Helper function to check if the two cards have opposite colors (based on suits)
// c1 and c2 are both strings, e.g. "C" "D" "H" "S"
// Return true they have opposite colors
function compareSuits(c1, c2) {
    if ((c1 === 'C' || c1 === 'S') && (c2 === 'D' || c2 === 'H')) {
        return true;
    }
    else if ((c2 === 'C' || c2 === 'S') && (c1 === 'D' || c1 === 'H')) {
        return true;
    }
    return false;
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
    TODO:
    1. Need to handle case where the active stack (stack getting card removed) becomes empty - don't pop anything b/c
    that will cause an index out of range error
    2. How to move multiple cards (e.g. move a chunk of 6,5,4 to a stack that has a 7)
   */
    handleTableauClick = (stackName) => { 
        // If `this.state.activeStack` is null, make the given `stackName` the activeStack.
        if (this.state.activeStack === 0) {
            this.setState({
                activeStack: stackName,
            });
            return;
        }

        // Check that activeStack and stackName aren't the same (means that user double-clicked on same stack)
        // Reset activeStack to 0 and exit function
        if (this.state.activeStack === stackName) {
            this.setState({
                activeStack: 0,
            });
            return;
        }

        // Otherwise, `this.state.activeStack` is not null, so proceed
        // The stack getting a card removed is the stack with the name active stack
        var activeStackName = String(this.state.activeStack);
        var stack1 = this.state.stacks[activeStackName];
        var transferCard = stack1.pop();
        // The stack getting a card added is the stack with `stackName`
        var stack2 = this.state.stacks[stackName];

        // If stack1 (activeStack) is a foundation and the card we're trying to remove from it is an Ace, don't allow it
        // Reset activeStack to 0 and exit function
        if (activeStackName.includes("foundation") && transferCard["card"] === "A") {
            stack1.push(transferCard);
            this.setState({
                activeStack: 0,
            });
            return;
        }

        // If stack2 is empty, make sure the transferCard is a King. Otherwise, not a valid move so 
        // reset activeStack to 0 and exit function
        if (stack2.length === 0) {
            if (transferCard['card'] !== 'K') {
                stack1.push(transferCard);
                this.setState({
                    activeStack: 0,
                });
                return;
            }
            stack2 = [transferCard];
        } 

        // If stack2 is not empty, need to compare both cards from both stacks to ensure it is a valid move
        else {
            // Compare stack1's and stack2's cards: is this card transfer allowed?
            // If not a valid move, then reset activeStack to 0 and exit function
            var stack2Card = stack2.pop(); 
            stack2.push(stack2Card);
            // If the numbers aren't allowed for valid move, or the colors aren't opposite then reset activeSTack to 0 and exit function
            if (!compareCards(stack2Card["card"], transferCard["card"]) || !compareSuits(stack2Card["suit"], transferCard["suit"])) {
                stack1.push(transferCard);
                this.setState({
                    activeStack: 0,
                });
                return;
            }
            // Otherwise, it's a valid move and continue logic
            stack2.push(transferCard);
        }

        // Check if the stack that a card got removed from (stack1) is not empty && still has any faceup cards
        if (stack1.length > 0) {
            var stack1Card = stack1.pop();
            if (stack1Card["faceUp"] === 0) {
                // Make the card face up and add it back to the stack
                stack1Card["faceUp"] = 1;
                stack1.push(stack1Card);
            } else {
                // Just add it back to the stack unchanged
                stack1.push(stack1Card);
            }
        }

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

    };

    /*
    TODO: right now the function assumes that the stack getting a card removed is not empty after getting the card removed
    √ Check that the transfer card's suit is the same as that of foundation stack.
    √ If transfer card is Ace and the foundation stack is empty, it is a valid move.
    3. If transfer card is not Ace and (foundation stack is not empty && top of foundation stack is one card above the transfer, it is a valid move.
    4. If not a valid move, take action the same way as in `handleTableauClick`
    5. If a valid move, take action the same way as in `handleTableauClick`
    */
   handleFoundationClick = (stackName) => {
        // If `this.state.activeStack` is null, make the given `stackName` the activeStack.
        if (this.state.activeStack === 0) {
            this.setState({
                activeStack: stackName,
            });
            return;
        }

        // Check that activeStack and stackName aren't the same (means that user double-clicked on same stack)
        // Reset activeStack to 0 and exit function
        if (this.state.activeStack === stackName) {
            this.setState({
                activeStack: 0,
            });
            return;
        }

        // Otherwise, `this.state.activeStack` is not null, so proceed
        // The stack getting a card removed is `activeStack`
        var activeStackName = String(this.state.activeStack);
        var stack1 = this.state.stacks[activeStackName];
        var transferCard = stack1.pop();
        // The stack getting a card added is the stack with `stackName`
        var stack2 = this.state.stacks[stackName];


        // If transfer card's suit isn't the same as that of foundation stack, reset activeStack to 0 and exit function
        if (transferCard["suit"] !== stackName[10]) {
            stack1.push(transferCard);
            this.setState({
                activeStack: 0,
            });
            return;
        }

        // If transfer card is Ace and the foundation stack is not empty, OR transfer card isn't Ace and foundation stack is empty,
        // reset activeStack to 0 and exit function
        if ((transferCard["card"] === 'A' && stack2.length > 0) || (transferCard["card"] !== 'A' && stack2.length === 0)) {
            stack1.push(transferCard);
            this.setState({
                activeStack: 0,
            });
            return;
        }

        // If transfer card is not Ace && foundation stack is not empty, need to compare the card values first
        if (transferCard["card"] !== 'A' && stack2.length > 0) {
            // Compare stack1's and stack2's cards: is this card transfer allowed?
            // If not a valid move, then reset activeStack to 0 and exit function
            var stack2Card = stack2.pop(); 
            stack2.push(stack2Card);
            // If the numbers aren't allowed for valid move, then reset activeStack to 0 and exit function
            if (!compareCards(transferCard["card"], stack2Card["card"])) {
                stack1.push(transferCard);
                this.setState({
                    activeStack: 0,
                });
                return;
            }
        }
        // Otherwise transfer card is Ace && foundation stack is empty, so don't need to compare card values
        
        // Continue logic for valid move
        stack2.push(transferCard);

        // Check if the stack that a card got removed from (stack1) still has any faceup cards
        if (stack1.length > 0) {
            var stack1Card = stack1.pop();
            if (stack1Card["faceUp"] === 0) {
                // Make the card face up and add it back to the stack
                stack1Card["faceUp"] = 1;
                stack1.push(stack1Card);
            } else {
                // Just add it back to the stack unchanged
                stack1.push(stack1Card);
            }
        }

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
   };

    render() {
        var tableau1;
        var tableau2;
        var tableau3;
        var tableau4;
        var tableau5;
        var tableau6;
        var tableau7;

        if (this.state.stacks.tableau1.length === 0) {
            tableau1 = <img src='/static/img/games/solitaire/stack-placeholder.png'/>;
        } else {
            tableau1 = this.state.stacks.tableau1?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
            );
        }

        if (this.state.stacks.tableau2.length === 0) {
            tableau2 = <img src='/static/img/games/solitaire/stack-placeholder.png'/>;
        } else {
            tableau2 = this.state.stacks.tableau2?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
            );
        }

        if (this.state.stacks.tableau3.length === 0) {
            tableau3 = <img src='/static/img/games/solitaire/stack-placeholder.png'/>;
        } else {
            tableau3 = this.state.stacks.tableau3?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
            );
        }

        if (this.state.stacks.tableau4.length === 0) {
            tableau4 = <img src='/static/img/games/solitaire/stack-placeholder.png'/>;
        } else {
            tableau4 = this.state.stacks.tableau4?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
            );
        }

        if (this.state.stacks.tableau5.length === 0) {
            tableau5 = <img src='/static/img/games/solitaire/stack-placeholder.png'/>;
        } else {
            tableau5 = this.state.stacks.tableau5?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
            );
        }

        if (this.state.stacks.tableau6.length === 0) {
            tableau6 = <img src='/static/img/games/solitaire/stack-placeholder.png'/>;
        } else {
            tableau6 = this.state.stacks.tableau6?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
            );
        }

        if (this.state.stacks.tableau7.length === 0) {
            tableau7 = <img src='/static/img/games/solitaire/stack-placeholder.png'/>;
        } else {
            tableau7 = this.state.stacks.tableau7?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={c.faceUp}
            />
            );
        }

        // Check if foundations are empty
        var foundationC;
        var foundationD;
        var foundationH;
        var foundationS;
        var Clength = this.state.stacks.foundationC.length;
        var Dlength = this.state.stacks.foundationD.length;
        var Hlength = this.state.stacks.foundationH.length;
        var Slength = this.state.stacks.foundationS.length;
        if (Clength === 0) {
            foundationC = '/static/img/games/solitaire/paris/foundationC.png';
        } else {
            var top = this.state.stacks.foundationC[Clength-1];
            foundationC = '/static/img/games/solitaire/paris/' + top['card'] + top['suit'] + '.1.jpeg';
        }
        if (Dlength === 0) {
            foundationD = '/static/img/games/solitaire/paris/foundationD.png';
        } else {
            var top = this.state.stacks.foundationD[Dlength-1];
            foundationD = '/static/img/games/solitaire/paris/' + top['card'] + top['suit'] + '.1.jpeg';
            
        }
        if (Hlength === 0) {
            foundationH = '/static/img/games/solitaire/paris/foundationH.png';
        } else {
            var top = this.state.stacks.foundationH[Hlength-1];
            foundationH = '/static/img/games/solitaire/paris/' + top['card'] + top['suit'] + '.1.jpeg';
            
        }
        if (Slength === 0) {
            foundationS = '/static/img/games/solitaire/paris/foundationS.png';
        } else {
            var top = this.state.stacks.foundationS[Slength-1];
            foundationS = '/static/img/games/solitaire/paris/' + top['card'] + top['suit'] + '.1.jpeg';
            
        }

        // Stock and waste piles
        var stock;
        if (this.state.stacks.stock.length > 0) {
            stock = '/static/img/games/solitaire/blue-back.jpeg';
        } else {
            stock = '/static/img/games/solitaire/stack-placeholder.png';
        }

        var waste;
        if (this.state.stacks.waste.length === 1) {
            waste = this.state.stacks.waste?.map((c, index) => 
            <SolitaireCard 
                key={index}
                card={c.card}
                suit={c.suit}
                deck={c.deck}
                faceUp={1}
            />
            );
        } else {
            waste = '/static/img/games/solitaire/stack-placeholder.png';
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

                {/* TODO: create the handleStockClick() and handleWasteClick() functions */}
                {/* <div className='stockWaste'>
                    <div className='solitaireStock' onClick={() => this.handleStockClick}>
                        <img src={stock}/>
                    </div>

                    <div className='solitaireWaste' onClick={() => this.handleWasteClick}>
                        <img src={waste}></img>
                    </div>
                </div> */}

                <div className='tableaus'>
                    <div className='solitaireStack' onClick={() => this.handleTableauClick('tableau1')}>
                        {tableau1}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleTableauClick('tableau2')}>
                        {tableau2}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleTableauClick('tableau3')}>
                        {tableau3}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleTableauClick('tableau4')}>
                        {tableau4}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleTableauClick('tableau5')}>
                        {tableau5}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleTableauClick('tableau6')}>
                        {tableau6}
                    </div>

                    <div className='solitaireStack' onClick={() => this.handleTableauClick('tableau7')}>
                        {tableau7}
                    </div>
                </div>

                <div className='foundations'>
                    <div className='solitaireFoundation' onClick={() => this.handleFoundationClick('foundationC')}>
                        <img src={foundationC}/>
                    </div>
                    <div className='solitaireFoundation' onClick={() => this.handleFoundationClick('foundationD')}>
                        <img src={foundationD}/>
                    </div>
                    <div className='solitaireFoundation' onClick={() => this.handleFoundationClick('foundationH')}>
                        <img src={foundationH}/>
                    </div>
                    <div className='solitaireFoundation' onClick={() => this.handleFoundationClick('foundationS')}>
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
