import React from "react";
import axios from "axios";
import Select from "react-select";
import Tabs from "./Tabs";

const options = {
    periods: [{label: "Pre-Revolutionary", value: "B"},
        {label: "Revolutionary", value: "D"},
        {label: "Post-Revolutionary", value: "A"}],
    cards: [{label: "Ace", value: "A"}, {label: "King", value: "K"},
        {label: "Queen", value: "Q"}, {label: "Jack", value: "J"}],
    suits: [{label: "Hearts", value: "H"}, {label: "Clubs", value: "C"},
        {label: "Diamonds", value: "D"}, {label: "Spades", value: "S"}],
    rectoVerso: [{label: "Front", value: "R"}, {label: "Back", value: "V"}],
    backNotes: [{label: "None", value: "nan"},
        {label: "Library Card Catalogue", value: "Library card catalogue"},
        {label: "Call and Response", value: "Call and Response"},
        {label: "Typographical Letters", value: "Typographical letters"}],
    towns: [{label: "Unknown", value: "Unknown"}, {label: "Paris", value: "Paris"},
        {label: "Auvergne", value: "Auvergne"}, {label: "Grenoble", value: "Grenoble"},
        {label: "Toulouse", value: "Toulouse"}, {label: "Montauban", value: "Montauban"},
        {label: "Lyon", value: "Lyon"}, {label: "Montpellier", value: "Montpellier"},
        {label: "Avignon", value: "Avignon"}],
    makers: [{label: "Unknown", value: "Unknown"}, {label: "Cordier", value: "Cordier"},
        {label: "Della Bella", value: "Della Bella"},
        {label: "Antoine Reynaud", value: "Antoine Reynaud"}, {label: "Vidal", value: "Vidal"},
        {label: "Ressy", value: "Ressy"}, {label: "J. Minot", value: "J. Minot"},
        {label: "Lepautre", value: "Lepautre"}, {label: "Bézu", value: "Bézu"},
        {label: "Gayant", value: "Gayant"}, {label: "Dugourc", value: "Dugourc"},
        {label: "Pinaut", value: "Pinaut"}, {label: "Gatteaux", value: "Gatteaux"},
        {label: "J-L David", value: "J-L David"}, {
            label: "Isidore Patrois",
            value: "Isidore Patrois"
        }]
};

export default class CardSearch extends React.Component {
    state = {
        options: options,
        periods: [],
        selected: {
            periods: [],
            cards: [],
            suits: [],
            rectoVerso: [],
            backNotes: [],
            towns: [],
            makers: []
        },
        searchResults: []
    }

    handleSearch = () => {
        console.log("clicked search!");
        console.log(JSON.stringify(this.state.selected));

        let selected = {};
        for (let item in this.state.selected) {
            if (this.state.selected[item].length) {
                selected[item] = [];
                this.state.selected[item].map((obj) => {
                    selected[item].push(obj.value);
                });
                // selected[item] = JSON.stringify(selected[item]);
                selected[item] = selected[item];
            }
        }

        console.log("Selected: ", selected);

        axios.get("/results", {params: JSON.stringify(selected)})
            .then((results) => {
                console.log("results from axios", results);
                // Setting variables in advance
                let dates;
                let maker;
                let town;
                let backNotes;
                let cardsSuitsDic = {
                    'A': 'Ace', 'K': 'King', 'Q': 'Queen', 'J': 'Jack', 'H': 'Hearts',
                    'C': 'Clubs', 'D': 'Diamonds', 'S': 'Spades'
                };
                /* 0: card.title, 1: card.image, 2: card.card, 3: card.suit, 4: card.start_date,
                5: card.end_date, 6: card.maker, 7: card.town, 8: card.back_notes */
                let cardItems = results.data.cards.map((card, idx) => {
                        if (card[4] === card[5]) {
                            dates = card[4];
                        } else {
                            dates = card[4] + ' - ' + card[5];
                        }
                        if (card[6] === 'nan' || 'Unknown') {
                            maker = 'Unknown';
                        } else {
                            maker = card[6];
                        }
                        if (card[7] === 'nan' || 'Unknown') {
                            town = 'Unknown';
                        } else {
                            town = card[7];
                        }
                        if (card[8] === 'nan') {
                            backNotes = 'None';
                        } else {
                            backNotes = card[8];
                        }

                        const styles = {
                            border: '2px solid rgba(0, 0, 0, 0.1)',
                            // borderRadius: '10%',
                            padding: '10%'
                        };

                        return <li key={idx}>
                            <div id={"CardOutline"} style={styles}>
                                <p> {'Card and Suit: ' + cardsSuitsDic[card[2]] + ' of ' + cardsSuitsDic[card[3]]}</p>
                                <p>{'Name of Deck: '}<span>{card[0]}</span></p>
                                <p>{'Maker: ' + maker + ', Date: ' + dates + ', Town: ' + town}</p>
                                <p>{'Back notes: ' + backNotes}</p>
                                <img className={'CardImage'} src={'/static/img/' + card[1]}/>
                                <br/>
                            </div>
                        </li>
                            ;
                    }
                );
                this.setState({searchResults: cardItems});
            });
    }

    handleChange = (selectedItems, context) => {
        // deep copy the state object to be able to modify it
        let stateToModify = JSON.parse(JSON.stringify(this.state.selected));
        // overwrite only the choice that was just updated
        stateToModify[context["name"]] = selectedItems;
        this.setState({selected: stateToModify});
    }

    render() {
        return <>


        </>
            ;
    }
}
