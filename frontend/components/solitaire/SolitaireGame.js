import React from "react";
import { Trans, withTranslation } from "react-i18next";
import StockWaste from "./StockWaste";
import FoundationStack from "./FoundationStack";
import TableauStack from "./TableauStack";
import { Container, Row, Col, Button } from 'react-bootstrap';

const cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["C", "D", "H", "S"];

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
    constructor(props) {
        super(props);

        var t1 = [];  // initial size 0
        var t2 = [];  // initial size 2
        var t3 = [];  // initial size 3
        var t4 = [];  // initial size 4
        var t5 = [];  // initial size 5
        var t6 = [];  // initial size 6
        var t7 = [];  // initial size 7
        var stock = []; // initial size 24

        // Create the deck and shuffle it
        var initialDeck = [];
        for (var i = 0; i < cards.length; i++) {
            for (var j = 0; j < suits.length; j++) {
                var card = cards[i];
                var suit = suits[j];
                initialDeck.push([card, suit]);
            }
        }
        var shuffledCards = shuffle(initialDeck);

        // Randomly assign each card to a tableau
        for (var i = 0; i < shuffledCards.length; i++) {
            var faceupCards = [0, 2, 5, 9, 14, 20, 27];
            var c = shuffledCards[i];
            // Assign exactly 1 faceup card to each tableau since that's how the game starts out
            // When pushing each card to a tableu, format each card as an object so it's easy to pass
            // into SolitaireCard constructor when rendering later: {"card", "suit", "deck", faceUp=bool}
            if (faceupCards.includes(i)) {
                var cardProps = {card: c[0], suit: c[1], faceUp: true};
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
                var cardProps = {card: c[0], suit: c[1], faceUp: false};
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
                    stock.push(cardProps);
                }
            }

        }

        // STATE
        this.state = {
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
            stock: stock, // all cards in the stock will be face down
            waste: [], // all cards in the waste will be face up, but remember only the most recently added card (at the end of the array) is accessible
            dragState: {
                stackName: '',
                cardIndex: -1,
            }
        };
    };

    setDragState = (stackName, cardIndex) => {
        this.setState(
            {dragState: {stackName, cardIndex }}
        );
    };

    clearDragState = () => this.setDragState('', -1);

    /*
    Only call this when the stock stack is clicked
    Draws a card from the stock stack and puts it in the waste stack (up to the user whether or not to leave it in the waste
    or move it to a tableau or foundation)
    Returns a card in the format {card: "card", suit: "suit", deck: "paris", faceUp: bool}}
    */
    drawCard = () => {
        var s = this.state.stock;
        var drawnCard = s.pop();
        var w = this.state.waste;
        w.push(drawnCard);

        this.setState({
            stock: s,
            waste: w
        });
    };

    handleTableauDrop = (destTableauIndex) => {
        const destStackName = 'tableau' + destTableauIndex.toString();
        const destStack = this.state[destStackName];

        const srcStackName = this.state.dragState.stackName;
        const srcStack = this.state[srcStackName];

        if (srcStack === destStack) return;

        const transferCard =
            srcStackName.startsWith('tableau')
            ? srcStack[this.state.dragState.cardIndex]
            : srcStack[srcStack.length-1];

        this.clearDragState();


        let isValidTransfer = false;
        if (destStack.length === 0) {
            // Only kings go on empty stacks
            isValidTransfer = transferCard["card"] === "K";
        } else {
            // Stack isn't empty, so check stacking rules
            const destStackTopCard = destStack[destStack.length-1];
            isValidTransfer = compareCards(destStackTopCard["card"], transferCard["card"]) &&
                              compareSuits(destStackTopCard["suit"], transferCard["suit"]);
        }

        if (!isValidTransfer) return;

        const cardsToTransfer = srcStack.splice(this.state.dragState.cardIndex);
        destStack.push(...cardsToTransfer);

        if (srcStack.length > 0) {
            const srcStackNextCard = srcStack[srcStack.length-1];
            srcStackNextCard.faceUp = true;
        }

        var stacks = {...this.state};
        stacks[destStackName] = destStack;
        this.setState({ stacks });
    };


    handleFoundationDrop = (suit) => {
        const srcStackName = this.state.dragState.stackName;
        const srcStack = this.state[srcStackName];

        const destStackName = 'foundation' + suit;
        const destStack = this.state[destStackName];

        if (srcStack === destStack) return;

        if (srcStackName.startsWith('tableau') && srcStack.length-1 !== this.state.dragState.cardIndex) {
            // can't drop multiple cards on to a foundation
            return;
        }

        const transferCard = srcStack[srcStack.length-1];

        this.clearDragState();

        if (transferCard["suit"] !== suit) return;

        let isValidTransfer = false;
        if (destStack.length === 0) {
            // Aces can only go on empty stacks
            isValidTransfer = transferCard["card"] === "A";
       } else {
           const destStackTopCard = destStack[destStack.length-1];
           isValidTransfer = compareCards(transferCard["card"], destStackTopCard["card"]);
       }

       if (!isValidTransfer) return;
       destStack.push(srcStack.pop());

       if (srcStack.length > 0) {
           const srcStackNextCard = srcStack[srcStack.length-1];
           srcStackNextCard.faceUp = true;
       }

       var stacks = {...this.state};
       stacks[destStackName] = destStack;
       this.setState({ stacks });
   };

   /*
   Handle the stock pile being clicked (drawing a new card to the waste pile):
   */
   handleStockClick = () => {
       var stock = this.state.stock;
       var stockCard = stock.pop();
       stockCard.faceUp = true;
       var waste = this.state.waste;
       waste.push(stockCard);

       // Create a copy of this.state and modify it
       var stacks = this.state;
       stacks["stock"] = stock;
       stacks["waste"] = waste;

       this.setState({
           stacks: stacks
       });
   };

   /*
   If the stockpile becomes empty and the game isn't over, refresh the stock with cards from the waste.
   This will get called when the user clicks on the 'refresh stock' button
   */
   refreshStock = () => {
       // If the waste is empty, do nothing
       if (this.state.waste.length === 0) {
           return;
       }

       // Otherwise, refill with the stock with cards from the waste, in reverse order
       var stock = this.state.waste;
       var waste = this.state.stock;
       while (waste.length > 0) {
           var card = waste.pop();
           stock.push(card);
       }

       // Create a copy of this.state and modify it
       var stacks = this.state;
       stacks["stock"] = stock;
       stacks["waste"] = waste;

       this.setState({
           // Reassign this.state to reflect the new changes
           stacks: stacks
       });
   };

    render() {
        let deck = this.props.deck;
        if (["paris", "dugourc", "david"].indexOf(deck) === -1) {
            deck = "paris";
        }

        let tableauStacks = [];
        let foundationStacks = [];
        for (let i = 1; i <= 7; i++) {
            const tableauName = `tableau${i}`;
            tableauStacks.push(
                <TableauStack
                    stack={this.state[tableauName]}
                    handleTableauDrop={this.handleTableauDrop}
                    index={i}
                    key={i}
                    deck={deck}
                    dragState={this.state.dragState}
                    setDragState={this.setDragState}
                />
            );
        }
        ['C', 'D', 'H', 'S'].forEach(suit => {
            foundationStacks.push(
                <FoundationStack
                    stack={this.state[`foundation${suit}`]}
                    handleFoundationDrop={this.handleFoundationDrop}
                    suit={suit}
                    key={suit}
                    deck={deck}
                    dragState={this.state.dragState}
                    setDragState={this.setDragState}
                />
            );
        });

        return (<>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Solitaire</h1>
                <a href="/games">
                    <Button variant="outline-dark">
                        {<Trans i18nKey="solitaire.returnToGames" />}
                    </Button>
                </a>
            </div>
            <Container className="solitaire-game">
                <Row className="stock-waste-foundations">
                    <Col md={4} className='stock-waste-container'>
                        <StockWaste
                            stock={this.state.stock}
                            waste={this.state.waste}
                            handleStockClick={this.handleStockClick}
                            handleWasteClick={this.handleWasteClick}
                            refreshStock={this.refreshStock}
                            deck={deck}
                            dragState={this.state.dragState}
                            setDragState={this.setDragState}
                        />
                    </Col>
                    <Col md={8} className='foundations justify-content-end'>
                        {foundationStacks}
                    </Col>
                </Row>
                <Row className="tableaus">
                    <Col xs={1}></Col>
                    {tableauStacks}
                </Row>
            </Container>
        </>);
    };
}

export default withTranslation()(SolitaireGame);
