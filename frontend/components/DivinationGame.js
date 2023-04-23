import React from "react";
import axios from "axios";

const NUM_CARDS = 33;

const DivinationGame = () => {
    const [cards, setCards] = React.useState([]);

    function getCards() {
        let cardNum = Math.floor(Math.random() * (NUM_CARDS)) + 1;
        let cardUp = Math.round(Math.random());

        axios.get('/divination-card/', {
            params: {
                number: cardNum,
                orientation: cardUp
            }
          })
          .then(function (response) {
            console.log(response.data);
            let card = response.data.card;
            setCards(current => [...current, card]);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    return (
        <>
            <button onClick={() => getCards()}>Get card</button>
            <p>Cards:</p>
            <ul>
                {cards.map(card => (
                    <li key={card.number}>{card.number}</li>
                ))}
            </ul>
        </>
    );
};

export default DivinationGame;