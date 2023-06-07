import React from "react";
import SolitaireCard from "./SolitaireCard";

/* 
The const arrays cards, suits, and decks are used during `shuffle` to randomize the cards
assigned to each tableau stack

The vars t1, t2, etc. are used to help manage SolitaireGame component's state: they are
variables used to store the randomized card objects assigned to each tableau, and in the constructor each variable 
gets assigned to its corresponding state variable (e.g. t1 gets assigned to the state variable that manages the first
tableau stack)
 */
const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["C", "D", "H", "S"];
const decks = ["paris", "dugourc", "david"];
var t1 = [];  // initial size 1
var t2 = [];  // initial size 2
var t3 = [];  // initial size 3
var t4 = [];  // initial size 4
var t5 = [];  // initial size 5
var t6 = [];  // initial size 6
var t7 = [];  // initial size 7
var st = []; // initial size 24

/* Helper function to randomize the tableau stacks at the start of the game */
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

/* 
Helper function to check if a card value is greater than the other
c1 and c2 are both strings, e.g. "1" "2" "K" "A"
Returns true if c1 = (c2 + 1) and false otherwise 
*/
function compareCards(c1, c2) {
    // if c1 and c2 are the same then return false
    if (c1 === c2) {
        return false;
    }

    c1 = cards.indexOf(c1);
    c2 = cards.indexOf(c2);
    console.log("Index of c1: " + c1);
    console.log("Index of c2: " + c2);

    if (c1 === (c2+1)) {
        return true;
    }
    return false;
}

/* 
Helper function to check if the two cards have opposite colors (colors are always based on suits)
c1 and c2 are both strings, e.g. "C" "D" "H" "S"
Returns true they have opposite colors
*/
function compareSuits(c1, c2) {
    if ((c1 === "C" || c1 === "S") && (c2 === "D" || c2 === "H")) {
        return true;
    }
    else if ((c2 === "C" || c2 === "S") && (c1 === "D" || c1 === "H")) {
        return true;
    }
    return false;
}

class SolitaireGame extends React.Component {
    // NOTE (from Ryaan): This is the main controlling Component that
    // will handle the main logic, particularly moving cards from
    // stack to stack and initializing/managing the stacks.

    constructor(props) {
        super(props);

        // Generate the entire deck of 52 cards by creating all possible combinations of cards and suits
        // `cardCombos` contains the entire deck in the format [[<card>, <suit>], [<card>, <suit>], ...]
        var cardCombos = [];
        for (var i = 0; i < cards.length; i++) {
            for (var j = 0; j < suits.length; j++) {
                var card = cards[i];
                var suit = suits[j];
                cardCombos.push([card, suit]);
            }
        }

        // Shuffle the entire deck
        var shuffledCards = shuffle(cardCombos);

        // Randomly assign each card to a tableau
        for (var i = 0; i < shuffledCards.length; i++) {
            var faceupCards = [0, 2, 5, 9, 14, 20, 27];
            var c = shuffledCards[i];
            // Assign exactly 1 faceup card to each tableau since that's how the game starts out
            // When pushing each card to a tableu, format each card as an object so it's easy to pass 
            // into SolitaireCard constructor when rendering later: {"card", "suit", "deck", faceUp=1 (face up) or 0 (face down)}
            if (faceupCards.includes(i)) {
                // Note (from Alyssa): set deck as Paris for now, deal with the other decks later (this needs to be changed to be dynamic!)
                var cardProps = {card: c[0], suit: c[1], deck: "paris", faceUp: 1}; 
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

        // STATE
        this.state = {
            // Tableaus: face up card(s) always at the end of the array
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
                stock: st, // all cards in the stock will be face down
                waste: [] // all cards in the waste will be face up, but remember only the most recently added card (at the end of the array) is accessible
            },

            // Note (from Alyssa): use `activeStack` to keep track of the card that's being actively transferred from one stack to another, 
            // Right now we have a 2-click method where the user clicks on deck A (the `active stack`) and then clicks on deck B,
            // and the card at the top of deck A gets moved to the top of deck B. This should later be omitted b/c the ultimate goal is for the user to be able to click and drag cards. 
            // `activeStack` is the (string) name of the stack with the card that's being moved
            activeStack: 0
        };

        // For testing purposes
        console.log(this.state.stacks);
    };

    /* 
    Only call this when the stock stack is clicked 
    Draws a card from the stock stack and puts it in the waste stack (up to the user whether or not to leave it in the waste
    or move it to a tableau or foundation)
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
                waste: w
            }
        });
    };

    /*
    Handle a tableau stack being clicked: when a tableau gets clicked on, there are two possibilities:
    (1) the stack clicked contains a card that will be moved, or (2) the stack clicked will get a card moved to it.
    The argument `stackName` is a string
    Note (from Alyssa): when the 2-click transfer method is changed to be a click-and-drag method, this function should allow
    for multiple cards to be moved at once, e.g. moving a chunk of cards with values 6,5,4 from stack A to stack B that has a card with value 7 on top)
   */
    handleTableauClick = (stackName) => { 
        // (1) If `this.state.activeStack` is 0, make the given `stackName` the activeStack.
        if (this.state.activeStack === 0) {
            this.setState({
                activeStack: stackName
            });
            return;
        }

        // (2) Otherwise, we already have an active stack, so that means the user wants to transfer a card to `stackName` 

        // Check that activeStack and stackName aren't the same (means that user double-clicked on same stack)
        // If so, reset activeStack to 0 and exit function
        if (this.state.activeStack === stackName) {
            this.setState({
                activeStack: 0
            });
            return;
        }

        // Otherwise, `this.state.activeStack` is not null, so proceed
        // stack1: The stack getting a card removed is `activeStack`
        var activeStackName = String(this.state.activeStack);
        var stack1 = this.state.stacks[activeStackName];
        // transferCard: the card we are trying to transfer from stack A to stack B
        var transferCard = stack1.pop();
        // stack2: The stack we are trying to move a card to is `stackName`
        var stack2 = this.state.stacks[stackName];

        // If stack1 (activeStack) is a foundation and the card we're trying to remove from it is an Ace, don't allow it
        // b/c it's an illegal move
        // Reset activeStack to 0 and exit function
        if (activeStackName.includes("foundation") && transferCard["card"] === "A") {
            stack1.push(transferCard);
            this.setState({
                activeStack: 0
            });
            return;
        }

        // If stack2 is empty, make sure the transferCard is a King. 
        // Otherwise, not a legal move so reset activeStack to 0 and exit function
        if (stack2.length === 0) {
            if (transferCard["card"] !== "K") {
                stack1.push(transferCard);
                this.setState({
                    activeStack: 0
                });
                return;
            }
            stack2 = [transferCard];
        } 

        // If stack2 is not empty, we must compare make sure the user is trying to make a legal move by checking if
        // 1. the top card of stack B is exactly 1 value above the transferCard's and that 
        // 2. the color is the opposite of the transferCard's color
        else {
            // Compare stack1's and stack2's card values and colors
            var stack2Card = stack2.pop(); 
            stack2.push(stack2Card);
            // Illegal move: if the numbers aren't allowed for valid move, or the colors aren't opposite then reset activeSTack to 0 and exit function
            if (!compareCards(stack2Card["card"], transferCard["card"]) || !compareSuits(stack2Card["suit"], transferCard["suit"])) {
                stack1.push(transferCard);
                this.setState({
                    activeStack: 0
                });
                return;
            }
            // Otherwise, it's a legal move so proceed
            stack2.push(transferCard);
        }

        // If stack1 is not empty && doesn't have any face up cards, make the card at the top of the stack face up
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

        // Now copy any changes to the state variables so the stacks can be properly re-rendered
        var stacks = this.state.stacks;
        stacks[[activeStackName]] = stack1;
        stacks[[stackName]] = stack2;

        this.setState({
            // Set activeStack as null for future callbacks
            activeStack: 0,
            // Reassign this.state.stacks to reflect the new changes
            stacks: stacks
        });
        
        // For testing purposes
        console.log(stackName + " gained a card");
        console.log(stackName + ": " + this.state.stacks[stackName]);
        console.log("activeStack set to 0");
        console.log("activeStack: " + this.state.activeStack);
        console.log(this.state);

    };

   /*
    Handle a foundation stack being clicked: when a foundation gets clicked on, there are two possibilities:
    (1) the stack clicked contains a card that will be moved, or (2) the stack clicked will get a card moved to it.
    The argument `stackName` is a string
   */
   handleFoundationClick = (stackName) => {
       // (1) If `this.state.activeStack` is 0, make the given `stackName` the activeStack.
       if (this.state.activeStack === 0) {
           this.setState({
               activeStack: stackName
           });
           return;
       }

       // (2) Otherwise, we already have an active stack, so that means the user wants to transfer a card to `stackName` 

       // Check that activeStack and stackName aren't the same (means that user double-clicked on same stack)
       // If so, reset activeStack to 0 and exit function
       if (this.state.activeStack === stackName) {
           this.setState({
               activeStack: 0
           });
           return;
       }

       // Otherwise, `this.state.activeStack` is not null, so proceed
       // stack1: The stack getting a card removed is `activeStack`
       var activeStackName = String(this.state.activeStack);
       var stack1 = this.state.stacks[activeStackName];
       // transferCard: the card we are trying to transfer from stack A to stack B
       var transferCard = stack1.pop();
       // stack2: The stack we are trying to move a card to is `stackName`
       var stack2 = this.state.stacks[stackName];

       // Illegal move checkpoint: if transfer card's suit isn't the same as that of foundation stack, reset activeStack to 0 and exit function
       if (transferCard["suit"] !== stackName[10]) {
           stack1.push(transferCard);
           this.setState({
               activeStack: 0
           });
           return;
       }

       // Illegal move checkpoint: if transfer card is Ace and the foundation stack is not empty, OR transfer card isn't Ace and foundation stack is empty,
       // reset activeStack to 0 and exit function
       if ((transferCard["card"] === "A" && stack2.length > 0) || (transferCard["card"] !== "A" && stack2.length === 0)) {
           stack1.push(transferCard);
           this.setState({
               activeStack: 0
           });
           return;
       }

       // Illegal move checkpoint: if transfer card is not Ace && foundation stack is not empty, need to compare the card values first
       // Make sure that the transferCard's value is exactly 1 above that of the top card in stack2
       if (transferCard["card"] !== "A" && stack2.length > 0) {
           var stack2Card = stack2.pop(); 
           stack2.push(stack2Card);
           // If the numbers aren't allowed for valid move, this is an illegal move so reset activeStack to 0 and exit function
           if (!compareCards(transferCard["card"], stack2Card["card"])) {
               stack1.push(transferCard);
               this.setState({
                   activeStack: 0
               });
               return;
           }
       }
       // Otherwise, transfer card is Ace && foundation stack is empty, so don't need to compare card values
        
       // At this point, we know it's a legal move so we can transfer the card from stack1 to stack2
       stack2.push(transferCard);

       // If stack1 is not empty && doesn't have any face up cards, make the card at the top of the stack face up
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

       // Now copy any changes to the state variables so the stacks can be properly re-rendered
       var stacks = this.state.stacks;
       stacks[[activeStackName]] = stack1;
       stacks[[stackName]] = stack2;

       this.setState({
           // Set activeStack as null for future callbacks
           activeStack: 0,
           // Reassign this.state.stacks to reflect the new changes
           stacks: stacks
       });
   };

   /*
   Handle the stock pile being clicked (drawing a new card):
   1. Pop a card from the top of the stack and re-render it to be face up
   2. Transfer (push) the card to the top of the waste
   User can only draw a card FROM the stock and should never be able to move a card TO the stock
   */
   handleStockClick = () => {
       var stock = this.state.stacks.stock;
       var stockCard = stock.pop();
       stockCard["faceUp"] = 1;
       var waste = this.state.stacks.waste;
       waste.push(stockCard);

       // Create a copy of this.state.stacks and modify it
       var stacks = this.state.stacks;
       stacks["stock"] = stock;
       stacks["waste"] = waste;
        
       this.setState({
           // Reassign this.state.stacks to reflect the new changes
           stacks: stacks
       });
   };

   /*
   Handle the waste pile being clicked
   Opposite of logic for handleFoundationClick: user can move a card FROM waste, but can't move a card TO waste
   */
   handleWasteClick = () => {
       // If `this.state.activeStack` is null, make the given `stackName` the activeStack.
       if (this.state.activeStack === 0) {
           this.setState({
               activeStack: "waste"
           });
           return;
       }

       // Otherwise, `this.state.activeStack` is not null, so do nothing
   };

   /*
   If the stockpile becomes empty and the game isn't over, refresh the stock with cards from the waste.
   This will get called when the user clicks on the 'refresh stock' button
   */
   refreshStock = () => {
       // If the waste is empty, do nothing
       if (this.state.stacks.waste.length === 0) {
           return;
       }

       // Otherwise, refill with the stock with cards from the waste, in reverse order
       var stock = this.state.stacks.waste;
       var waste = this.state.stacks.stock;
       while (waste.length > 0) {
           var card = waste.pop();
           stock.push(card);
       }

       // Create a copy of this.state.stacks and modify it
       var stacks = this.state.stacks;
       stacks["stock"] = stock;
       stacks["waste"] = waste;
    
       this.setState({
           // Reassign this.state.stacks to reflect the new changes
           stacks: stacks
       });
       console.log("Length of this.state.stacks.waste after refill: " + this.state.stacks.waste.length);

       // Note (from Alyssa): there's a weird bug where the waste doesn't fully empty out and there's still
       // one card left in the waste after refreshing the stock.
       // I ran a bunch of print statements and it seems that the stack correctly fully empties out at the end of this function,
       // but sometime during the rendering, one of the cards from the stock gets moved back to the waste
   };

   render() {
       var tableau1;
       var tableau2;
       var tableau3;
       var tableau4;
       var tableau5;
       var tableau6;
       var tableau7;

       // For the tableau stacks, map each card object to a SolitaireCard component so it can be rendered

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

       // Check if foundations are empty. If they are, render a slightly transparent image to indicate
       // to the user that the foundations are empty. Otherwise, just render the top card (face up) in each foundation stack
       var foundationC;
       var foundationD;
       var foundationH;
       var foundationS;
       var Clength = this.state.stacks.foundationC.length;
       var Dlength = this.state.stacks.foundationD.length;
       var Hlength = this.state.stacks.foundationH.length;
       var Slength = this.state.stacks.foundationS.length;
       if (Clength === 0) {
           foundationC = "/static/img/games/solitaire/paris/foundationC.png";
       } else {
           var top = this.state.stacks.foundationC[Clength-1];
           foundationC = "/static/img/games/solitaire/paris/" + top["card"] + top["suit"] + ".1.jpeg";
       }
       if (Dlength === 0) {
           foundationD = "/static/img/games/solitaire/paris/foundationD.png";
       } else {
           var top = this.state.stacks.foundationD[Dlength-1];
           foundationD = "/static/img/games/solitaire/paris/" + top["card"] + top["suit"] + ".1.jpeg";
            
       }
       if (Hlength === 0) {
           foundationH = "/static/img/games/solitaire/paris/foundationH.png";
       } else {
           var top = this.state.stacks.foundationH[Hlength-1];
           foundationH = "/static/img/games/solitaire/paris/" + top["card"] + top["suit"] + ".1.jpeg";
            
       }
       if (Slength === 0) {
           foundationS = "/static/img/games/solitaire/paris/foundationS.png";
       } else {
           var top = this.state.stacks.foundationS[Slength-1];
           foundationS = "/static/img/games/solitaire/paris/" + top["card"] + top["suit"] + ".1.jpeg";
            
       }

       // Render stock and waste piles
       // If stock is empty, display the 'refresh stock' button so the user can refill the stock
       var stock;
       console.log("this.state.stacks.stock.length: " + this.state.stacks.stock.length);
       if (this.state.stacks.stock.length > 0) {
           stock = <img src='/static/img/games/solitaire/blue-back.jpeg'/>;
       } else {
           stock = <button onClick={this.refreshStock}>Refresh Stock</button>;
       }

       // If the waste is empty, display a placeholder image to indicate it's empty
       // Otherwise, just render the top card (card up)
       var waste;
       console.log("this.state.stacks.waste.length: " + this.state.stacks.waste.length);
       if (this.state.stacks.waste.length > 0) {
           var Wlength = this.state.stacks.waste.length;
           var top = this.state.stacks.waste[Wlength-1];
           waste = "/static/img/games/solitaire/paris/" + top["card"] + top["suit"] + ".1.jpeg";
       } else if (this.state.stacks.waste.length === 0) {
           waste = "/static/img/games/solitaire/stack-placeholder.png";
       }
        
       return (
           <div className='solitaireBoard'>

               <div className='stockWaste'>
                   <div className='solitaireStock' onClick={() => this.handleStockClick()}>
                       {stock}
                   </div>

                   <div className='solitaireWaste' onClick={() => this.handleWasteClick()}>
                       <img src={waste}></img>
                   </div>
               </div>

               <div className='tableaus'>
                   <div className='solitaireStack' onClick={() => this.handleTableauClick("tableau1")}>
                       {tableau1}
                   </div>

                   <div className='solitaireStack' onClick={() => this.handleTableauClick("tableau2")}>
                       {tableau2}
                   </div>

                   <div className='solitaireStack' onClick={() => this.handleTableauClick("tableau3")}>
                       {tableau3}
                   </div>

                   <div className='solitaireStack' onClick={() => this.handleTableauClick("tableau4")}>
                       {tableau4}
                   </div>

                   <div className='solitaireStack' onClick={() => this.handleTableauClick("tableau5")}>
                       {tableau5}
                   </div>

                   <div className='solitaireStack' onClick={() => this.handleTableauClick("tableau6")}>
                       {tableau6}
                   </div>

                   <div className='solitaireStack' onClick={() => this.handleTableauClick("tableau7")}>
                       {tableau7}
                   </div>
               </div>

               <div className='foundations'>
                   <div className='solitaireFoundation' onClick={() => this.handleFoundationClick("foundationC")}>
                       <img src={foundationC}/>
                   </div>
                   <div className='solitaireFoundation' onClick={() => this.handleFoundationClick("foundationD")}>
                       <img src={foundationD}/>
                   </div>
                   <div className='solitaireFoundation' onClick={() => this.handleFoundationClick("foundationH")}>
                       <img src={foundationH}/>
                   </div>
                   <div className='solitaireFoundation' onClick={() => this.handleFoundationClick("foundationS")}>
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
