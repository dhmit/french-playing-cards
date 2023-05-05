import React from "react";
import axios from "axios";
import i18next from "i18next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: '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',
    });
const openai = new OpenAIApi(configuration);
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
        const divination_string = [...keywords].join(', ');

        // get reading from keywords

        setReading(divination_string);

    }

    async function generate(req, res) {

    if (!configuration.apiKey) {
        res.status(500).json({
        error: {
            message: "OpenAI API key not configured, please follow instructions in README.md",
        }
        });
        return;
    }

    const predictionQuestion = req.body.prediction || '';
    if (predictionQuestion.trim().length === 0) {
        res.status(400).json({
        error: {
            message: "Please enter a valid question",
        }
        });
        return;
    }

    const keywords = req.body.keywords || '';
    if (keywords.trim().length === 0) {
        res.status(400).json({
        error: {
            message: "Please click on +1 cards to obtain keywords",
        }
        });
        return;
    }


    try {
        const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(predictionQuestion, keywords),
        temperature: 0.6,
        });
        res.status(200).json({ result: completion.data.choices[0].text });
    } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
        } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
            error: {
            message: 'An error occurred during your request.',
                }
            });
            }
        }
    }

    function generatePrompt(predictionQuestion, keywords) {
    return `Write a prediction in response to the question: ${predictionQuestion}, using the following words:${keywords}`;
    }



    // api part
    const [predictionInput, setPredictionInput] = React.useState("");

    const [result, setResult] = React.useState();

    async function onSubmit(event) {
        event.preventDefault();
        try {
        const response = await fetch(generate(), {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ prediction: predictionInput, keywords: reading }),
        });

        const data = await response.json();
        if (response.status !== 200) {
            throw data.error || new Error(`Request failed with status ${response.status}`);
        }

        console.log(data.result);
        setResult(data.result);
        setPredictionInput("");
        } catch(error) {
        // Consider implementing your own error handling logic here
        console.error(error);
        alert(error.message);
        }
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
                <h3>Input a question to generate a tarot reading</h3>
                <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="question"
                    placeholder="Enter a question"
                    value={predictionInput}
                    onChange={(e) => setPredictionInput(e.target.value)}
                />
                {/* <input type="submit" value="Generate predictions" /> */}
                </form>
            </div>
            <p>
                {reading}
            </p>
            <p>{result}</p>
        </>
    );
};

export default DivinationGame;