import React from "react";
import axios from "axios";
import Select from "react-select";
import {withTranslation} from "react-i18next";
import {PropTypes} from "prop-types";
import {Loading} from  "./Loading";

const CARDS_SUITS_ABBREVATIONS = {
    "A": "Ace", "K": "King", "Q": "Queen", "J": "Jack", "H": "Hearts",
    "C": "Clubs", "D": "Diamonds", "S": "Spades"
};

const options = {
    periods: [{label: "pre", value: "B"},
        {label: "revolutionary", value: "D"},
        {label: "post", value: "A"}],
    cards: [{label: "ace", value: "A"}, {label: "king", value: "K"},
        {label: "queen", value: "Q"}, {label: "jack", value: "J"}],
    suits: [{label: "heart", value: "H"}, {label: "club", value: "C"},
        {label: "diamond", value: "D"}, {label: "spade", value: "S"}],
    towns: [{label: "unknown", value: "Unknown"}, {label: "Paris", value: "Paris"},
        {label: "Auvergne", value: "Auvergne"}, {label: "Grenoble", value: "Grenoble"},
        {label: "Toulouse", value: "Toulouse"}, {label: "Montauban", value: "Montauban"},
        {label: "Lyon", value: "Lyon"}, {label: "Montpellier", value: "Montpellier"},
        {label: "Avignon", value: "Avignon"}],
};

class CardSearch extends React.Component {
    state = {
        options: options,
        periods: [],
        selected: {
            periods: [],
            cards: [],
            suits: [],
            towns: [],
        },
        results: [],
        searching: true,
    };

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch = () => {
        console.log(JSON.stringify(this.state.selected));

        let selected = {};
        for (let item in this.state.selected) {
            if (this.state.selected[item].length) {
                selected[item] = [];
                this.state.selected[item].map((obj) => {
                    selected[item].push(obj.value);
                });
                selected[item] = selected[item];
            }
        }

        axios.get("/search-results/", {params: {query: JSON.stringify(selected)}})
            .then((results) => { this.setState({results: results.data, searching: false}); })
            .catch(() => { console.log(error); });
    };

    handleChange = (selectedItems, context) => {
        // deep copy the state object to be able to modify it
        let stateToModify = JSON.parse(JSON.stringify(this.state.selected));
        // overwrite only the choice that was just updated
        stateToModify[context["name"]] = selectedItems;
        this.setState(
            {
                selected: stateToModify,
                searching: true
            },
            this.handleSearch
        );
    };


    render() {
        const {t} = this.props;

        let results;
        if (this.state.searching) {
            results = <Loading />;
        } else {
            const cards = this.state.results.cards.map((card, idx) => {
                let dates = (card.start_date === card.end_date) ? card.start_date : card.start_date + " - " + card.end_date;
                let maker = (card.maker === "nan" || card.maker === "Unknown") ? "Unknown" : card.maker;
                let town = (card.town === "nan" || card.town === "Unknown") ? "Unknown" : card.town;

                const styles = {
                    border: "2px solid rgba(0, 0, 0, 0.1)",
                    padding: "10%"
                };

                return (
                    <li key={idx}>
                        <div id={"CardOutline"} style={styles}>
                            <img className={"card-image"} src={"/static/img/" + card.image}/>
                            <p> {CARDS_SUITS_ABBREVATIONS[card.card] + " of " + CARDS_SUITS_ABBREVATIONS[card.suit]}</p>
                            <p>{"Deck: " + card.title}</p>
                            <p>{"Maker: " + maker}</p>
                            <p>{"Date: " + dates}</p>
                            <p>{"Town: " + town}</p>
                        </div>
                    </li>
                );
            });

            results = <ul>{cards}</ul>;
        }


        return <>
            <div id='search-page'>
                <div id="search-column">
                    <div className='search-filter'>
                        {t("iconography.search.categories.period.title")}
                        <Select
                            name={"periods"}
                            isMulti
                            value={this.state.selected.periods}
                            getOptionLabel={option => t("iconography.search.categories.period." + option.label)}
                            options={options.periods}
                            onChange={this.handleChange}
                            placeholder={t("iconography.search.placeholder")}
                            classNames={{control: (_state) => 'search-select'}}
                        />
                    </div>

                    <div className='search-filter'>
                        {t("iconography.search.categories.card.title")}
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
                    <div className='search-filter'>
                        {t("iconography.search.categories.suit.title")}
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

                    <div className='search-filter'>
                        {t("iconography.search.categories.town")}
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


                <div id="search-results-column">
                    {results}
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
