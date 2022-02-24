import React from "react";
import axios from "axios";
import Select from "react-select";

export default class CardSearch extends React.Component {
    state = {
        options: {
            periods: [{label: "Pre-Revolutionary"}, {label: "Revolutionary"},
                    {label: "Post-Revolutionary"}],
            cards: [{label: "Ace"}, {label: "King"}, {label: "Queen"}, {label: "Jack"}],
            suits: [{label: "Hearts"}, {label: "Clubs"}, {label: "Diamonds"}, {label: "Spades"}],
            rectoVerso: [{label: "Front"}, {label: "Back"}],
            backNotes: [{label: "None"}, {label: "Library Card Catalogue"}, {label: "Call and" + " Response"},
                        {label: "Typographical Letters"}],
            towns: [{label: "Unknown"}, {label: "Paris"}, {label: "Auvergne"}, {label: "Grenoble"},
                    {label: "Toulouse"}, {label: "Montauban"}, {label: "Lyon"}, {label: "Montpellier"},
                    {label: "Avignon"}],
            makers: [{label: "Unknown"}, {label: "Cordier"}, {label: "Della Bella"},
                    {label: "Antoine Reynaud"}, {label: "Vidal"}, {label: "Ressy"}, {label: "J. Minot"},
                    {label: "Lepautre"}, {label: "Bézu"}, {label: "Gayant"}, {label: "Dugourc"}, {label: "Pinaut"},
                    {label: "Gatteaux"}, {label: "J-L David"}, {label: "Isidore Patrois"}]
        },
        periods: [],
        selectedItems: []
    }

    handleSearch = () => {
        console.log("clicked search!");
        /*let results = {
            periods: ["B"]
        };*/
        axios.get("/results", {params: JSON.stringify(this.state.selectedItems)})
            .then((results) => {
                console.log("results from axios", results);
            });
    }

    handleChange = (selectedItems) => {
        console.log(selectedItems);
        this.setState({selectedItems});
    }

    render() {
        return <>
            <h2>17th-19th Century French Playing Cards</h2>
            <p>Filter search by selecting the features of the cards you want to see:</p>
            <br/>

            <p>Time period</p>
            <Select
                isMulti
                value = {this.state.selectedItems}
                options = {this.state.options.periods}
                onChange = {this.handleChange}

                // id={"periods"}
                // selectedItems={this.state.selectedItems}
                // onChange={this.handleSelectChange}
                // options={this.state.options.periods}
            />
            <br/>

            <p>Card</p>
            <Select
                isMulti
                value = {this.state.selectedItems}
                options = {this.state.options.cards}
                onChange = {this.handleChange}
            />
            <br/>

            <p>Suit</p>
            <Select
                isMulti
                value = {this.state.selectedItems}
                options = {this.state.options.suits}
                onChange = {this.handleChange}
            />
            <br/>

            <p>Front or back</p>
            <Select
                isMulti
                value = {this.state.selectedItems}
                options = {this.state.options.rectoVerso}
                onChange = {this.handleChange}
            />
            <br/>

            <p>Back Notes</p>
            <Select
                isMulti
                value = {this.state.selectedItems}
                options = {this.state.options.backNotes}
                onChange = {this.handleChange}
            />
            <br/>

            <p>Town</p>
            <Select
                isMulti
                value = {this.state.selectedItems}
                options = {this.state.options.towns}
                onChange = {this.handleChange}
            />
            <br/>

            <p>Maker</p>
            <Select
                isMulti
                value = {this.state.selectedItems}
                options = {this.state.options.makers}
                onChange = {this.handleChange}
            />
            <br/>

            <button onClick={this.handleSearch}>Search</button>
        </>;
    }
}
