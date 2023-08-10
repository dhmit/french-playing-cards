import React, { useState } from "react";
import axios from "axios";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Form, Alert } from 'react-bootstrap';
import Loading from "./Loading";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const NUM_CARDS = 33;

const DisclaimerScreen = ({ goToNext }) => {
    const { t } = useTranslation();
    return (
        <>
            <Row>
                <Col>
                    <p>{t("divination.disclaimer.salutation")}</p>
                    <p>{t("divination.disclaimer.p0")}</p>
                    <p>{t("divination.disclaimer.p1")}</p>
                    <p>{t("divination.disclaimer.p2")}</p>
                    <p>{t("divination.disclaimer.signOff")}</p>
                    <p>{t("divination.disclaimer.team")}</p>
                </Col>
            </Row>

            <Row className="justify-content-end">
                <Col xs="auto">
                    <a className="btn btn-outline-dark" onClick={goToNext}>{t("divination.disclaimer.nextButton")}</a>
                </Col>
            </Row>
        </>
    );

};


const Screen1 = ({ goToNext }) => {
    const { t } = useTranslation();
    return (
        <>
            <Row>
                <Col>
                    <p>{t("divination.screen1.p0")}</p>
                    <p>{t("divination.screen1.p1")}</p>
                    <p>{t("divination.screen1.p2")}</p>
                    <p>{t("divination.screen1.p3")}</p>
                </Col>
            </Row>

            <Row className="justify-content-end">
                <Col xs="auto">
                    <a className="btn btn-outline-dark" onClick={goToNext}>{t("divination.screen1.nextButton")}</a>
                </Col>
            </Row>
        </>
    );

};


const Screen2 = ({ goToNext }) => {
    const { t } = useTranslation();

    const [inputData, setInputData] = useState('');
    const [error, setError] = useState(false);  // State to handle input validation

    const handleDrawCards = (cardCount) => {
        if (!inputData.trim()) {  // Check if the inputData is empty or just whitespaces
            setError(true);
            return;
        }
        goToNext(inputData, cardCount);
    };

    return (
        <>
            <Row>
                <Col>
                    <p>{t("divination.screen2.p0")}</p>
                    <p>{t("divination.screen2.p1")}</p>
                    <p>{t("divination.screen2.p2")}</p>
                    <ul>
                        <li>{t("divination.screen2.example1")}</li>
                        <li>{t("divination.screen2.example2")}</li>
                        <li>{t("divination.screen2.example3")}</li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form>
                        <Form.Group controlId="textInput">
                            <Form.Control
                                type="text"
                                placeholder="Enter your question"
                                value={inputData}
                                onChange={(e) => {
                                    setInputData(e.target.value);
                                    setError(false);
                                }}
                            />
                            {error && <Alert variant="danger">Please enter some text before drawing cards.</Alert>}
                        </Form.Group>

                        <a className="btn btn-outline-secondary" onClick={() => handleDrawCards('3')}>
                            Draw 3 Cards
                        </a>
                        <a className="btn btn-outline-secondary" onClick={() => handleDrawCards('5')}>
                            Draw 5 Cards
                        </a>
                    </Form>
                </Col>
            </Row>
        </>
    );
};



async function getReading(question, keywords) {
    let input = question.trim();


    const input_string =
        `Generate a cartomancy reading based on the practices of Jean-Baptiste Alliette from the 18th century.
         Pretend you are an online cartomancer, interpreting the mystical themes of Alliette's historic teachings.

         The user's query is: "${input}".

         Based on the cards that were drawn, the prediction should have the following themes:
             ${[...keywords].join(", ")}

         Note that these are themes indicated by the combination of cards we have generated, but not the names of the
         cards themselves. You should not write "the card of X" where X is a theme - cards do not indicate a specific theme,
         but rather the combination of cards produced these themes.

         Your response should span 3-5 sentences.
         Emphasize a narrative coherence in the prediction while maintaining a neutral yet mystic tone.
         For instance, if the themes are "journey, obstacles, prosperity" and the question is about career prospects,
         You might say, "A journey awaits you in your career, but obstacles will test your resolve.
         Overcome them, and prosperity is assured."`;

    try {
        console.log("Sending request and waiting...");
        let response = await axios({
            method: "post",
            url: "/generate-prediction/",
            data: {
                question: input_string
            }
        });
        console.log("Got our response...");
        return response.data.response;
    } catch (error) {
        console.log(error);
    }
}





const CardReadingScreen = ({ question, cards, keywords, goToNext }) => {
    const [loading, setLoading] = useState(false); // Start with loading as false
    const [reading, setReading] = useState('');
    const [showReading, setShowReading] = useState(false); // This state determines when to show the reading

    const { t } = useTranslation();

    async function fetchReading() {
        try {
            setLoading(true); // Set loading to true when fetching starts
            const fetchedReading = await getReading(question, keywords);
            setReading(fetchedReading);
        } catch (error) {
            console.log("Error fetching reading:", error);
        } finally {
            setLoading(false);
        }
    }

    const generateReading = () => {
        setShowReading(true);
        fetchReading();
    };

    return (
        <div>
            <p>{t("divination.screen3.p")}</p>

            <Row className="justify-content-center mb-2">
                <h2>Your Question</h2>
                <p className="lead">{question}</p>
            </Row>

            <Row className="justify-content-center mb-4">
                <h2>Your Cards</h2>
                {cards.map(card => (
                    <Col md={2} sm={4} key={card.id} className="mb-2">
                        <img className="img-fluid" src={"/static/img/cartomancy/" + card.image} alt={`Card ${card.id}`} />
                    </Col>
                ))}
            </Row>

            <Row className="mb-4">
                <h2>Your Keywords</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    {[...keywords].map((keyword, i) => (
                        <div key={i} className="keyword-bubble mr-2 mb-2">{keyword}</div>
                    ))}
                </div>
            </Row>

            {!showReading && (
                <Row className="justify-content-center mb-4">
                    <button className="btn btn-outline-dark" onClick={generateReading}>{t("divination.screen3.generateButton")}</button>
                </Row>
            )}

            {showReading && (
                <Row className="justify-content-center mb-2">
                    <h2>Your Reading</h2>
                    {loading
                        ? <><p>This may take up to 20 seconds. Thanks for your patience.</p><Loading /> </>
                        : <p className="lead">{reading}</p>}
                </Row>
            )}

            {showReading && !loading && (
                <Row className="justify-content-end">
                    <Col xs="auto">
                        <a className="btn btn-outline-dark" onClick={goToNext}>{t("divination.screen3.nextButton")}</a>
                    </Col>
                </Row>
            )}
        </div>
    );
};


const EndingScreen = ({ goToNext }) => {
    const { t } = useTranslation();
    return (
        <>
            <Row>
                <Col>
                    <p>{t("divination.screen4.p")}</p>
                </Col>
            </Row>

            <Row className="justify-content-end">
                <Col xs="auto">
                    <a className="btn btn-outline-dark" onClick={goToNext}>{t("divination.screen4.nextButton")}</a>
                </Col>
                <Col xs="auto">
                    <a className="btn btn-outline-dark" onClick={goToNext}>{t("divination.screen4.moreInfo")}</a>
                </Col>
            </Row>
        </>
    );

};


const DivinationGame = () => {
    const [screen, setScreen] = useState(0);
    const [question, setQuestion] = React.useState(null);
    const [cards, setCards] = React.useState(null);
    const [keywords, setKeywords] = React.useState("");

    async function getCards(num) {
        let cardStrings = new Set();

        while(cardStrings.size < num) {
            let cardNum = Math.floor(Math.random() * (NUM_CARDS)) + 1;
            let cardUp = Math.round(Math.random());
            cardStrings.add(cardNum + "." + cardUp);
        }

        const chosenCards = [];

        // TODO(ra): this makes a request per card -- simplify to a single request!
        for (const cardString of cardStrings) {
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

            chosenCards.push(response.data.card);
        }

        setCards(chosenCards);
        return chosenCards;
    };

    // TODO: I think we could expose much more richness about the cards in the display
    // maybe not just "keywords", but indicate orientation.
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

        setKeywords(keywords);
        return keywords;
    }


    const handleScreen2Submit = async (questionInput, numCardsInput) => {
        setQuestion(questionInput);
        const cards = await getCards(numCardsInput);
        getKeywords(cards);
        setScreen(3);
    };

    return (
        <Container id="divination" className="mt-4">
            {screen === 0 && <DisclaimerScreen goToNext={() => setScreen(1)} />}
            {screen === 1 && <Screen1 goToNext={() => setScreen(2)} />}
            {screen === 2 && <Screen2 goToNext={handleScreen2Submit} />}
            {screen === 3 && <CardReadingScreen goToNext={() => setScreen(4)}
                                                question={question}
                                                cards={cards}
                                                keywords={keywords} />}
            {screen === 4 && <EndingScreen goToNext={() => setScreen(2)} /> }
        </Container>
    );





};

export default DivinationGame;
