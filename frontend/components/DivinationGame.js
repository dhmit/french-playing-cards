import React from "react";
import axios from "axios";
import i18next from "i18next";

const NUM_CARDS = 33;

const DivinationGame = () => {
    const [cards, setCards] = React.useState([]);

    function getCards(num) {
        let cardStrings = new Set();

        while(cardStrings.size < num) {
            let cardNum = Math.floor(Math.random() * (NUM_CARDS)) + 1;
            let cardUp = Math.round(Math.random());

            cardStrings.add(cardNum + "." + cardUp);
        }

        console.log(cardStrings);

        setCards([]);

        for(const card of cardStrings) {
            let [cardNum, cardUp] = card.split(".");
            cardNum = parseInt(cardNum);
            cardUp = parseInt(cardUp);
            
            axios.get('/divination-card/', {
                params: {
                    number: cardNum,
                    orientation: cardUp,
                    language: i18next.language
                }
              })
              .then(function (response) {
                console.log(response.data);
                setCards(current => [...current, response.data.card]);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    };

    return (
        <>
            <button onClick={() => getCards(3)}>Get 3 cards</button>
            <div id="divination-cards">
                {cards.map(card => (
                    <img key={card.id} src={"/static/img/cartomancy/" + card.image} />
                ))}
            </div>
        </>
    );
};

export default DivinationGame;