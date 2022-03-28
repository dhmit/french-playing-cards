import React from "react";
import axios from "axios";
import Select from "react-select";

const options = {
    periods: [{label: "Pre-Revolutionary", value: "B"},
        {label: "Revolutionary", value: "D"},
        {label: "Post-Revolutionary", value: "A"}],
    cards: [{label: "Ace", value: "A"}, {label: "King", value: "K"},
        {label: "Queen", value: "Q"}, {label: "Jack", value: "J"}],
    suits: [{label: "Hearts", value: "H"}, {label: "Clubs", value: "C"},
        {label: "Diamonds", value: "D"}, {label: "Spades", value: "S"}],
    rectoVerso: [{label: "Front", value: "R"}, {label: "Back", value: "V"}],
    backNotes: [{label: "None", value: ""},
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
        // console.log(JSON.stringify(this.state.selected));

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

        axios.get("/results", {params: selected})
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

    displayCardResults() {
        if (this.state.periods.length === 0) {
            return null;
        }
        // x = ['A', 'B']
        // y = x.map(el => {
        //     return el + 'hi'
        // })
        // y = ['Ahi', 'Bhi']
        // this.state.periods.map
    }

    render() {
        return <>
            <h2>17th-19th Century French Playing Cards</h2>
            <p>Filter search by selecting the features of the cards you want to see:</p>
            <br/>

            <p>Time period</p>
            {/*TESTING: display image from pathway*/}
            <img src={"../backend/app/static/D/ESC/AC.1.jpeg"} alt={"Picture not" + " displaying"}/>
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

            {this.displayCardResults()}
        </>;
    }
}
