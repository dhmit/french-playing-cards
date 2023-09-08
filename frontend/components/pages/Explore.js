import React from "react";
import axios from "axios";

import ReactSlider from 'react-slider';
import Select from "react-select";

import {withTranslation} from "react-i18next";

import {PropTypes} from "prop-types";
import {Loading} from  "../Loading";

const MIN_YEAR = 1640;
const MAX_YEAR = 1850;
const REVOLUTION_START = 1789;
const REVOLUTION_END = 1799;

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
                ranks: [],
                suits: [],
                towns: [],
                start: MIN_YEAR,
                end: MAX_YEAR,
            },
            results: [],
            searching: true,
            mode: SearchMode.CARD,
        };
        this.searchTimeout = null;
    }

    componentDidMount() {
        this.handleSearch();
    }


    handleSearch = () => {
        let selected = {};

        for (let item in this.state.selected) {
            if (Array.isArray(this.state.selected[item]) && this.state.selected[item].length) {
                // For array items like ranks, suits, and towns
                selected[item] = this.state.selected[item].map(obj => obj.value);
            } else if (item === "start" || item === "end") {
                // Directly assign numeric values for start and end
                selected[item] = this.state.selected[item];
            }
        }

        const params = {
            query: JSON.stringify(selected),
            mode: this.state.mode === SearchMode.CARD ? 'card' : 'deck',
        };
        axios.get("/search-results/", {params})
             .then((results) => { this.setState({results: results.data, searching: false}); })
             .catch(error => { console.log(error); }); // Adjusted the error callback to reference the 'error' parameter
    };

    handleChange = (selectedItems, context) => {
        // deep copy the state object to be able to modify it
        let stateToModify = JSON.parse(JSON.stringify(this.state.selected));

        if (context.name === "periods") {
            // Check the selected period and adjust the start and end years
            let selectedPeriod = selectedItems ? selectedItems.value : null;
            switch (selectedPeriod) {
                case "B": // pre-revolutionary
                    stateToModify.start = MIN_YEAR;
                    stateToModify.end = REVOLUTION_START;
                    break;
                case "D": // revolutionary
                    stateToModify.start = REVOLUTION_START;
                    stateToModify.end = REVOLUTION_END;
                    break;
                case "A": // post
                    stateToModify.start = REVOLUTION_END;
                    stateToModify.end = MAX_YEAR;
                    break;
                default:
                    break;
            }
        } else {
            // overwrite only the choice that was just updated
            stateToModify[context["name"]] = selectedItems;
        }

        this.setState({
            selected: stateToModify,
            searching: true
        }, this.handleSearch);
    };

    handleSliderChange = (values) => {
        // The values array contains two integers: [startYear, endYear]
        this.setState(prevState => ({
            selected: {
                ...prevState.selected,
                start: values[0],
                end: values[1]
            }
            }),
        );

        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(this.handleSearch, 100);
    };


    setMode = (mode) => {
        this.setState({mode, searching: true}, this.handleSearch);
    };


    sliderRenderThumb = (props, state) => <div {...props}>{state.valueNow}</div>;

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

                const cardRank = t("search.ranks." + card.rank);

                return (
                    <li key={idx}>
                        <div style={styles}>
                            <p style={{float: 'left'}}>
                                {town && town + ', '}
                                {dates}
                            </p>
                            <p className={cardNameClass}>
                                {cardRank}
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
                    const cardRank = t("search.ranks." + card.rank);
                    return (
                        <div className="deck-card" key={idx}>
                            <p className={cardNameClass}>
                                {cardRank}
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
                    <li key={idx} className="deck-result card mt-4">
                        <div className="card-header">
                            {deck.title} | {deck.start_date}-{deck.end_date} | {deck.maker} | {deck.town}
                        </div>
                        <div className="deck-cards card-body">
                            {cards}
                        </div>

                    </li>
                );
            });

            results = <ul id="search-results-decks">{decks}</ul>;
        }


        return (<>
            <div className="lead p-4">
                {t("search.header")}
            </div>
            <div id='search-page'>
                <div id="search-column">
                    <div className="btn-group">
                        <a onClick={() => this.setMode(SearchMode.CARD)}
                           href="#" className={`btn btn-outline ${(this.state.mode === SearchMode.CARD) ? 'active' : ''}`}>
                            {t('search.cardSearch')}
                        </a>
                        <a onClick={() => this.setMode(SearchMode.DECK)}
                           href="#" className={`btn btn-outline ${(this.state.mode === SearchMode.DECK) ? 'active' : ''}`}>
                            {t('search.deckSearch')}
                        </a>
                    </div>

                    <div className='search-filter'>
                        <ReactSlider
                            className="explore-slider"
                            thumbClassName="explore-slider-thumb"
                            trackClassName="explore-slider-track"
                            defaultValue={[this.state.selected.start, this.state.selected.end]}
                            value={[this.state.selected.start, this.state.selected.end]}
                            ariaLabel={['Lower thumb', 'Upper thumb']}
                            ariaValuetext={state => `Year ${state.valueNow}`}
                            renderThumb={this.sliderRenderThumb}
                            onChange={this.handleSliderChange}
                            min={MIN_YEAR}
                            max={MAX_YEAR}
                            pearling
                            minDistance={1}  // At least 1 year difference
                        />
                        </div>

                    <div className='search-filter'>
                        {t("search.categories.period.title")}
                        <Select
                            name={"periods"}
                            value={this.state.selected.periods}
                            getOptionLabel={option => t("search.categories.period." + option.label)}
                            options={options.periods}
                            onChange={this.handleChange}
                            placeholder={t("search.placeholder")}
                            classNames={{control: (_state) => 'search-select'}}
                        />
                    </div>

                    {this.state.mode === SearchMode.CARD &&
                        <>
                            <div className='search-filter'>
                                {t("search.categories.card.title")}
                                <Select
                                    isMulti
                                    name={"ranks"}
                                    value={this.state.selected.ranks}
                                    getOptionLabel={option => t("search.categories.card." + option.label)}
                                    options={options.ranks}
                                    onChange={this.handleChange}
                                    placeholder={t("search.placeholder")}
                                />
                            </div>

                            <div className='search-filter'>
                                {t("search.categories.suit.title")}
                                <Select
                                    isMulti
                                    name={"suits"}
                                    value={this.state.selected.suits}
                                    getOptionLabel={option => t("search.categories.suit." + option.label)}
                                    options={options.suits}
                                    onChange={this.handleChange}
                                    placeholder={t("search.placeholder")}
                                />
                                    </div>
                        </>
                    }

                    <div className='search-filter'>
                        {t("search.categories.town")}
                        <Select
                            isMulti
                            name={"towns"}
                            value={this.state.selected.towns}
                            getOptionLabel={option => t("search.categories." + option.label, option.label)}
                            options={options.towns}
                            onChange={this.handleChange}
                            placeholder={t("search.placeholder")}
                        />
                    </div>
                </div>


                <div id="search-results-column">
                    {results}
                </div>

            </div>
        </>);
    }
}

CardSearch.propTypes = {
    t: PropTypes.any,
};

export default withTranslation()(CardSearch);
