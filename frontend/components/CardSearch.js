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
                            borderRadius: '10%',
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
            <h2>17th-19th Century French Playing Cards</h2>

            <Tabs>

                <div label="Search Page">
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

                    <br/>
                    <br/>
                    <br/>
                    <div id={'CardResults'}>
                        <p id={'Note'}>To view an card image in greater detail, right click on it
                            and select 'Open Image in New Tab'</p>
                        <ul>{this.state.searchResults}</ul>
                    </div>
                </div>

                <div label="About">
                    <p>The iconography, taxation, manufacture and uses of playing cards in France
                        underwent substantial changes from 1650 to 1850. By the 1780s, an “Old
                        Regime” deck of cards had emerged, characterized by the standardization of
                        face cards, the state’s increasing efforts to extract tax revenue from their
                        producers, their manufacture via the guild system, and the gaming and
                        non-gaming uses the king’s subjects made of new and used decks of cards. The
                        Revolution of 1789, however, temporarily eliminated the card-makers guild
                        and the excise tax levied on cards, and mandated the suppression of kings,
                        queens, and jacks on face cards. By the time of the Directory in the late
                        1790s, and even more so during the First Empire, Old Regime practices crept
                        back into the design, taxation, and uses of playing cards. At the same time,
                        the technologies of production evolved and the industry consolidated from
                        dozens of manufacturers around the kingdom to a half dozen or so firms. The
                        history of playing cards over these two centuries offers insight into
                        questions of rupture and continuity in French politics, culture, and
                        economics across the revolutionary divide.</p>
                    <br/>
                    <p>This web site is one outcome of a larger project by <a
                        href={'https://history.mit.edu/people/jeffrey-s-ravel/'}>Jeffrey
                        Ravel</a>, Professor of History at MIT, to write this history. Here you will
                        find digital reproductions of the fronts and backs of playing cards
                        manufactured between 1644 and 1848. The search feature allows you to sort
                        these images and their accompanying metadata by time period, suit and card,
                        manufacturer, and place of production. Users will be able to study changes
                        in the iconography of these cards over time.</p>
                    <br/>
                    <p>At a later date, we hope to add a feature that will allow users to play
                        popular Old Regime and Revolutionary card games online, selecting the
                        historical deck with which they will play.</p>
                    <br/>
                    <p>Professor Ravel and his team wish to thank the <a
                        href={'https://www.bnf.fr/en/bibliotheque-nationale-de-france-catalogue-general'}>Bibliothèque
                        nationale de France</a> (BnF), which has provided the digital versions of
                        playing cards and the metadata we make available on our site. Users are
                        invited to explore the extensive digital reproductions of playing cards in
                        the collections of the BnF, which the Library makes available on its <a
                            href={'https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop'}>Gallica</a> web
                        site. We are also grateful to the <a
                            href={'https://digitalhumanities.mit.edu/'}>MIT Programs
                            in the Digital Humanities</a> and <a
                            href={'https://www.performantsoftware.com/'}>Performant
                            Software</a> for technical support.</p>
                    <br/>
                </div>

                <div label="Credits">
                    <h3>Jeffrey Ravel</h3>
                    <br/>
                    <h4>Alyssa Choi</h4>
                    <br/>
                    <h4>Nyana Wright</h4>
                    <br/>
                    <h4>Anastasia Aizman</h4>
                </div>

            </Tabs>

            <span id={'Logos'}>
                <img id={'BnF_logo'} src={'/static/img/bnf_logo.jpg'}/>
                <img id={'DH_logo'} src={'/static/img/dh_logo.png'}/>
                <img id={'Performant_logo'} src={'/static/img/performant-logo.png'}/>
            </span>


        </>
            ;
    }
}
