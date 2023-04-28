import React from "react";
import axios from "axios";
import i18next from "i18next";

const NUM_CARDS = 33;

const DivinationGame = () => {
    const [cards, setCards] = React.useState([]);
    const [reading, setReading] = React.useState("");

    async function getCards(num) {
        let cardStrings = new Set();
        setCards([]);

        while(cardStrings.size < num) {
            let cardNum = Math.floor(Math.random() * (NUM_CARDS)) + 1;
            let cardUp = Math.round(Math.random());

            cardStrings.add(cardNum + "." + cardUp);
        }

        let chosen = [];

        for(const cardString of cardStrings) {
            let [cardNum, cardUp] = cardString.split(".");
            cardNum = parseInt(cardNum);
            cardUp = parseInt(cardUp);
            
            let response = await axios.get('/divination-card/', {
                params: {
                    number: cardNum,
                    orientation: cardUp,
                    language: i18next.language
                }
            });
              
            chosen.push(response.data.card);
        }

        setCards(chosen);
        return chosen;
    };

    function getKeywords(cards) {
        let keywords = new Set();

        // check multiples
        for(let i = 0; i < cards.length; i++) {
            let card = cards[i].card;
            let up = cards[i].orientation;
            let matches = [card];

            for(let j = 0; j < cards.length; j++) {
                if(i !== j && card === cards[j].card && up === cards[j].orientation) {
                    matches.push(cards[j].card);
                }
            }

            let repeats = matches.length;
            if (repeats === 4) keywords.add(cards[i].quad);
            if (repeats === 3) keywords.add(cards[i].triple);
            if (repeats === 2) keywords.add(cards[i].double);
        }

        // check pairs
        for(let i = 0; i < cards.length; i++) {
            let num = cards[i].number;
            for(let j = i; j < cards.length; j++) {
                if (num + cards[j].number === 31) {
                    keywords.add(cards[i].pair);
                    keywords.add(cards[j].pair);
                    break;
                }
            }
        }

        // choose keyword: 1. check eteilla 2. choose title/subtitle
        for (let i = cards.length - 1; i >= 0; i--) {
            if(i !== cards.length - 1 && cards[i+1].card === 'E') {
                keywords.add(cards[i].etteilla);
            }
            else if (cards[i].number !== 1) {
                let pick_title = Math.round(Math.random()); // randomly pick title or subtitles
                if(pick_title) {
                    keywords.add(cards[i].title);
                }
                else {
                    keywords.add(cards[i].subtitle);
                }
            }
        }

        return keywords;
    }

    async function divinate(num) {
        const chosen = await getCards(num);
        const keywords = getKeywords(chosen);
        const divination_string = "Your keywords are: " + [...keywords].join(', ');

        // get reading from keywords

        setReading(divination_string);
    }

    return (
        <>
            <button onClick={() => divinate(3)}>Get 3 cards</button>
            <button onClick={() => divinate(5)}>Get 5 cards</button>
            <br />
            <div id="divination-cards">
                {cards.map(card => (
                    <img key={card.id} src={"/static/img/cartomancy/" + card.image} />
                ))}
            </div>
            <p>
                {reading}
            </p>
        </>
    );
};

export default DivinationGame;