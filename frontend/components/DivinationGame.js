import React from "react";
import axios from "axios";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import {Modal} from "react-bootstrap";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const NUM_CARDS = 33;

const WorkInProgressModal = ({showModal, handleClose}) => {
    const { t } = useTranslation();
    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <p>
                    {t("divination.disclaimer.salutation")}
                </p>
                <p>
                    {t("divination.disclaimer.p0")}
                </p>
                <p>
                    {t("divination.disclaimer.p1")}
                </p>
                <p>
                    {t("divination.disclaimer.p2")}
                </p>
                <p>
                    {t("divination.disclaimer.signOff")}
                </p>
                <p>
                    {t("divination.disclaimer.team")}
                </p>
            </Modal.Body>
        </Modal>
    );
};

const DivinationGame = () => {
    const [question, setQuestion] = React.useState("");
    const [cards, setCards] = React.useState([]);
    const [keywords, setKeywords] = React.useState("");
    const [reading, setReading] = React.useState("");
    const [showModal, setShowModal] = React.useState(true);

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

            let response = await axios.get("/divination-card/", {
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
            if(i !== cards.length - 1 && cards[i+1].card === "E") {
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

    // TODO: French translation!
    async function getReading(keywords) {
        let input = question.trim();
        const input_string = "Write a prediction in response to the question \"" + input + "\" using the following themes: " + [...keywords].join(", ");
        setReading("Reading cards...");

        await axios({
            method: "post",
            url: "/generate-prediction/",
            data: {
                question: input_string
            }
        }).then(function (response) {
            setReading(response.data.response);
        }).catch(function (error) {
            console.log(error);
            setReading("Unable to get prediction. Please make sure cookies are enabled.");
        });
    }

    async function divinate(num) {
        // check if a question has been asked
        if (question.trim() !== "") {
            // choose cards
            const chosen = await getCards(num);

            // compute keywords
            const keywords = getKeywords(chosen);
            const keyword_string = "The keywords based on your cards are: " + [...keywords].join(", ");
            setKeywords(keyword_string);

            // get reading from keywords
            await getReading(keywords);
        }
        else {
            setReading("Please enter a question!");
        }
    }

    return (<>
        <WorkInProgressModal showModal={showModal} handleClose={() => setShowModal(false)} />

        <div id="divination">
            <h3>Ask a question to get a tarot reading!</h3>
            <input type="text" placeholder="Ask a question..." onChange={(e) => setQuestion(e.target.value)}/>
            <br />
            <button type="submit" onClick={() => divinate(3)}>Get 3 cards</button>
            or
            <button type="submit" onClick={() => divinate(5)}>Get 5 cards</button>
            <br />
            <div id="divination-cards">
                {cards.map(card => (
                    <img key={card.id} src={"/static/img/cartomancy/" + card.image} />
                ))}
            </div>
            <p>
                {keywords}
            </p>
            <p>
                {reading}
            </p>
        </div>
    </>);
};

export default DivinationGame;
