import React from "react";
import axios from "axios";
import Select from "react-select";

const options = {
    periods: [{label: "Pre-Revolutionary", value: "Pre-Revolutionary"},
        {label: "Revolutionary", value: "Revolutionary"},
        {label: "Post-Revolutionary", value: "Post-Revolutionary"}],
    cards: [{label: "Ace", value: "Ace"}, {label: "King", value: "King"},
        {label: "Queen", value: "Queen"}, {label: "Jack", value: "Jack"}],
    suits: [{label: "Hearts", value: "Hearts"}, {label: "Clubs", value: "Clubs"},
        {label: "Diamonds", value: "Diamonds"}, {label: "Spades", value: "Spades"}],
    rectoVerso: [{label: "Front", value: "Front"}, {label: "Back", value: "Back"}],
    backNotes: [{label: "None", value: "None"},
        {label: "Library Card Catalogue", value: "Library Card Catalogue"},
        {label: "Call and Response", value: "Call and Response"},
        {label: "Typographical Letters", value: "Typographical Letters"}],
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
        }
    }

    handleSearch = () => {
        console.log("clicked search!");
        console.log(JSON.stringify(this.state.selected));
        axios.get("/results", {params: JSON.stringify(this.state.selected)})
            .then((results) => {
                console.log("results from axios", results);
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
            <h2>17th-19th Century French Playing Cards</h2>
            <p>Filter search by selecting the features of the cards you want to see:</p>
            <br/>

            <p>Time period</p>
            <Select
                name={"periods"}
                isMulti
                value={this.state.selected.periods}
                options={options.periods}
                onChange={this.handleChange}
            />
            <br/>

            <p>Card</p>
            <Select
                isMulti
                name={"cards"}
                value={this.state.selected.cards}
                options={options.cards}
                onChange={this.handleChange}
            />
            <br/>

            <p>Suit</p>
            <Select
                isMulti
                name={"suits"}
                value={this.state.selected.suits}
                options={options.suits}
                onChange={this.handleChange}
            />
            <br/>

            <p>Front or back</p>
            <Select
                isMulti
                name={"rectoVerso"}
                value={this.state.selected.rectoVerso}
                options={options.rectoVerso}
                onChange={this.handleChange}
            />
            <br/>

            <p>Back Notes</p>
            <Select
                isMulti
                name={"backNotes"}
                value={this.state.selected.backNotes}
                options={options.backNotes}
                onChange={this.handleChange}
            />
            <br/>

            <p>Town</p>
            <Select
                isMulti
                name={"towns"}
                value={this.state.selected.towns}
                options={options.towns}
                onChange={this.handleChange}
            />
            <br/>

            <p>Maker</p>
            <Select
                isMulti
                name={"makers"}
                value={this.state.selected.makers}
                options={options.makers}
                onChange={this.handleChange}
            />
            <br/>

            <button onClick={this.handleSearch}>Search</button>
        </>;
    }
}
