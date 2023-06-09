import React from "react";
import axios from "axios";
import Select from "react-select";
import {withTranslation} from "react-i18next";
import {PropTypes} from "prop-types";
import {Loading} from  "./Loading";

const SUIT_SYMBOLS = {
    H: "♥",
    C: "♣",
    D: "♦",
    S: "♠",
};

const options = {
    periods: [
        {label: "pre", value: "B"},
        {label: "revolutionary", value: "D"},
        {label: "post", value: "A"}
    ],
    ranks: [
        {label: "ace", value: "A"}, 
        {label: "king", value: "K"},
        {label: "queen", value: "Q"}, 
        {label: "jack", value: "J"}
    ],
    suits: [
        {label: "heart", value: "H"},
        {label: "club", value: "C"},
        {label: "diamond", value: "D"},
        {label: "spade", value: "S"}
    ],
    towns: [
        {label: "unknown", value: "Unknown"}, {label: "Paris", value: "Paris"},
        {label: "Auvergne", value: "Auvergne"}, {label: "Grenoble", value: "Grenoble"},
        {label: "Toulouse", value: "Toulouse"}, {label: "Montauban", value: "Montauban"},
        {label: "Lyon", value: "Lyon"}, {label: "Montpellier", value: "Montpellier"},
        {label: "Avignon", value: "Avignon"}
    ],
};


const SearchMode = {
  CARD: 0,
  DECK: 1,
};

class CardSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {
                periods: [],
                ranks: [],
                suits: [],
                towns: [],
            },
            results: [],
            searching: true,
            mode: SearchMode.CARD,
        };
    }

    componentDidMount() {
        this.handleSearch();
    }

    handleSearch = () => {
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

        const params = {
            query: JSON.stringify(selected),
            mode: this.state.mode === SearchMode.CARD ? 'card' : 'deck',
        };
        axios.get("/search-results/", {params})
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

    setMode = (mode) => {
        this.setState({mode, searching: true}, this.handleSearch);
    };
    

    render() {
        const {t} = this.props;

        // TODO(ra): This is a bit of a mess, so maybe factor these out into separate components later

        let results;
        if (this.state.searching) {
            results = <Loading />;
        } else if (this.state.mode === SearchMode.CARD) {
            const cards = this.state.results.map((card, idx) => {
                let dates = (card.start_date === card.end_date) ? card.start_date : card.start_date + " - " + card.end_date;
                let maker = (card.maker === "nan" || card.maker === "Unknown") ? undefined : card.maker;
                let town = (card.town === "nan" || card.town === "Unknown") ? undefined : card.town;

                const styles = {
                    border: "2px solid rgba(0, 0, 0, 0.1)",
                    padding: "10%"
                };

                let cardNameClass = "card-name";
                if (['H', 'D'].includes(card.suit)) {
                    cardNameClass += " red";
                }

                return (
                    <li key={idx}>
                        <div style={styles}>
                            <p style={{float: 'left'}}>
                                {town && town + ', '}
                                {dates}
                            </p>
                            <p className={cardNameClass}>
                                {card.rank}
                                {SUIT_SYMBOLS[card.suit]}
                            </p>
                            <img className="card-image" src={"/static/img/" + card.image}/>
                            <p><em>{card.title}</em></p>
                            {maker && <p>{"Maker: " + maker}</p>}
                        </div>
                    </li>
                );
            });

            results = <ul id="search-results-cards">{cards}</ul>;
        } else if (this.state.mode === SearchMode.DECK) {
            const decks = this.state.results.map((deck, idx) => {
                const cards = deck.cards.map((card, idx) => {
                    let cardNameClass = "card-name";
                    if (['H', 'D'].includes(card.suit)) {
                        cardNameClass += " red";
                    }
                    return (
                        <div className="deck-card" key={idx}>
                            <p className={cardNameClass}>
                                {card.rank}
                                {SUIT_SYMBOLS[card.suit]}
                            </p>
                            <p>
                            <img className="card-image" src={"/static/img/" + card.image}/>
                            </p>
                            <p><em>{card.title}</em></p>
                        </div>
                    );
                });

                return (
                    <li key={idx} className="card mt-4">
                        <div className="card-header">
                            {deck.title} | {deck.start_date}-{deck.end_date} | {deck.maker} | {deck.town}
                        </div>
                        <div className="card-body">
                            {cards}
                        </div>

                    </li>
                );
            });

            results = <ul id="search-results-decks">{decks}</ul>;
        }


        return (
            <div id='search-page'>
                <div id="search-column">
                    <div className="btn-group">
                        <a onClick={() => this.setMode(SearchMode.CARD)}
                           href="#" className={`btn btn-outline ${(this.state.mode === SearchMode.CARD) ? 'active' : ''}`}>
                            Card Search
                        </a>
                        <a onClick={() => this.setMode(SearchMode.DECK)}
                           href="#" className={`btn btn-outline ${(this.state.mode === SearchMode.DECK) ? 'active' : ''}`}>
                            Deck Search
                        </a>
                    </div>


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

                    {this.state.mode === SearchMode.CARD && 
                        <>
                            <div className='search-filter'>
                                {t("iconography.search.categories.card.title")}
                                <Select
                                    isMulti
                                    name={"ranks"}
                                    value={this.state.selected.ranks}
                                    getOptionLabel={option => t("iconography.search.categories.card." + option.label)}
                                    options={options.ranks}
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
                        </>
                    }

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
        );
    }
}

CardSearch.propTypes = {
    t: PropTypes.any,
};

export default withTranslation()(CardSearch);
