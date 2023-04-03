import React from "react";
import axios from "axios";
import Select from "react-select";
import Tabs from "./Tabs";
import { withTranslation } from "react-i18next";
import { PropTypes } from "prop-types";

const options = {
    periods: [{label: "pre", value: "B"},
        {label: "revolutionary", value: "D"},
        {label: "post", value: "A"}],
    cards: [{label: "ace", value: "A"}, {label: "king", value: "K"},
        {label: "queen", value: "Q"}, {label: "jack", value: "J"}],
    suits: [{label: "heart", value: "H"}, {label: "club", value: "C"},
        {label: "diamond", value: "D"}, {label: "spade", value: "S"}],
    rectoVerso: [{label: "front", value: "R"}, {label: "back", value: "V"}],
    backNotes: [{label: "None", value: "nan"},
        {label: "catalogue", value: "Library card catalogue"},
        {label: "call_response", value: "Call and Response"},
        {label: "typographical", value: "Typographical letters"}],
    towns: [{label: "unknown", value: "Unknown"}, {label: "Paris", value: "Paris"},
        {label: "Auvergne", value: "Auvergne"}, {label: "Grenoble", value: "Grenoble"},
        {label: "Toulouse", value: "Toulouse"}, {label: "Montauban", value: "Montauban"},
        {label: "Lyon", value: "Lyon"}, {label: "Montpellier", value: "Montpellier"},
        {label: "Avignon", value: "Avignon"}],
    makers: [{label: "unknown", value: "Unknown"}, {label: "Cordier", value: "Cordier"},
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

class CardSearch extends React.Component {
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
    };

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

        axios.get("/results/", {params: {query: JSON.stringify(selected)}})
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
            }
            )
            .catch(function (error) {
                console.log(error);
            });
    };

    handleChange = (selectedItems, context) => {
        // deep copy the state object to be able to modify it
        let stateToModify = JSON.parse(JSON.stringify(this.state.selected));
        // overwrite only the choice that was just updated
        stateToModify[context["name"]] = selectedItems;
        this.setState({selected: stateToModify});
    };


    render() {
        const { t } = this.props;



        return <>
        <div id='SearchPage' label="Search Page">
                    <h3>{t("iconography.search.header")}</h3>
                    <br/>

                    <div className='SearchBarPair'>
                    <div className='SearchBar'>
                    <p>{t("iconography.search.categories.period.title")}</p>
                    <Select
                        name={"periods"}
                        isMulti
                        value={this.state.selected.periods}
                        getOptionLabel={option => t("iconography.search.categories.period." + option.label)}
                        options={options.periods}
                        onChange={this.handleChange}
                        placeholder={t("iconography.search.placeholder")}
                    />
                    </div>

                    <div className='SearchBar'>
                    <p>{t("iconography.search.categories.card.title")}</p>
                    <Select
                        isMulti
                        name={"cards"}
                        value={this.state.selected.cards}
                        getOptionLabel={option => t("iconography.search.categories.card." + option.label)}
                        options={options.cards}
                        onChange={this.handleChange}
                        placeholder={t("iconography.search.placeholder")}
                    />
                    </div>
                    </div>
                    
                    <div className='SearchBarPair'>
                    <div className='SearchBar'>
                    <p>{t("iconography.search.categories.suit.title")}</p>
                    <Select
                        isMulti
                        name={"suits"}
                        value={this.state.selected.suits}
                        getOptionLabel={option => t("iconography.search.categories.suit." + option.label)}
                        options={options.suits}
                        onChange={this.handleChange}
                        placeholder={t("iconography.search.placeholder")}
                    />
                    </div>

                    <div className='SearchBar'>
                    <p>{t("iconography.search.categories.rectoVerso.title")}</p>
                    <Select
                        isMulti
                        name={"rectoVerso"}
                        value={this.state.selected.rectoVerso}
                        getOptionLabel={option => t("iconography.search.categories.rectoVerso." + option.label)}
                        options={options.rectoVerso}
                        onChange={this.handleChange}
                        placeholder={t("iconography.search.placeholder")}
                    />
                    </div>
                    </div>

                    <div className='SearchBarPair'>
                    <div className='SearchBar'>
                    <p>{t("iconography.search.categories.notes.title")}</p>
                    <Select
                        isMulti
                        name={"backNotes"}
                        value={this.state.selected.backNotes}
                        getOptionLabel={option => t("iconography.search.categories.notes." + option.label, option.label)}
                        options={options.backNotes}
                        onChange={this.handleChange}
                        placeholder={t("iconography.search.placeholder")}
                    />
                    </div>

                    <div className='SearchBar'>
                    <p>{t("iconography.search.categories.town")}</p>
                    <Select
                        isMulti
                        name={"towns"}
                        value={this.state.selected.towns}
                        getOptionLabel={option => t("iconography.search.categories." + option.label, option.label)}
                        options={options.towns}
                        onChange={this.handleChange}
                        placeholder={t("iconography.search.placeholder")}
                    />
                    </div>
                    </div>

                    <div className='SearchBarPair'>
                    <div className='SearchBar'>
                    <p>{t("iconography.search.categories.maker")}</p>
                    <Select
                        isMulti
                        name={"makers"}
                        value={this.state.selected.makers}
                        getOptionLabel={option => t("iconography.search.categories." + option.label, option.label)}
                        options={options.makers}
                        onChange={this.handleChange}
                        placeholder={t("iconography.search.placeholder")}
                    />
                    </div>
                    </div>

                    <div id='SearchButton'>
                        <button id='SearchButton' onClick={this.handleSearch}>{t("iconography.search.button")}</button>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <div id={'CardResults'}>
                        <p id={'Note'}>{t("iconography.search.note")}</p>
                        <ul>{this.state.searchResults}</ul>
                    </div>
                </div>
        </>
            ;
    }
}

CardSearch.propTypes = {
    t: PropTypes.any
};

export default withTranslation()(CardSearch);