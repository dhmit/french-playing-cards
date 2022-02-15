import React from "react";
import { MultiSelect } from "react-multi-select-component";

const periods = [{label: 'Pre-Revolutionary'}, {label: 'Revolutionary'}, {label: 'Post-Revolutionary'}];
const cards = [{label: 'Ace'}, {label: 'King'}, {label: 'Queen'}, {label: 'Jack'}];
const suits = [{label: 'Hearts'}, {label: 'Clubs'}, {label: 'Diamonds'}, {label: 'Spades'}];
const rectoVerso = [{label: 'Front'}, {label: 'Back'}];
const backNotes = [{label: 'None'}, {label: 'Library Card Catalogue'}, {label: 'Call and Response'},
                    {label: 'Typographical Letters'}];
const towns = [{label: 'Unknown'}, {label: 'Paris'}, {label: 'Auvergne'}, {label: 'Grenoble'}, {label: 'Toulouse'},
                {label: 'Montauban'}, {label: 'Lyon'}, {label: 'Montpellier'}, {label: 'Avignon'}];
const makers = [{label: 'Unknown'}, {label: 'Cordier'}, {label: 'Della Bella'}, {label: 'Antoine Reynaud'},
                {label: 'Vidal'}, {label: 'Ressy'}, {label: 'J. Minot'}, {label: 'Lepautre'}, {label: 'Bézu'},
                {label: 'Gayant'}, {label: 'Dugourc'}, {label: 'Pinaut'}, {label: 'Gatteaux'}, {label: 'J-L David'},
                {label: 'Isidore Patrois'}];

const Home = () => {

    return (
        <>
            <h2>17th-19th Century French Playing Cards</h2>
            <p>Filter search by selecting the features of the cards you want to see:</p>
            <br/>

            <p>Time period</p>
            <MultiSelect
                options={periods}
            />
            <br/>

            <p>Card</p>
            <MultiSelect options={cards}/>
            <br/>

            <p>Suit</p>
            <MultiSelect options={suits}/>
            <br/>

            <p>Front or back</p>
            <MultiSelect options={rectoVerso}/>
            <br/>

            <p>Back Notes</p>
            <MultiSelect options={backNotes}/>
            <br/>

            <p>Town</p>
            <MultiSelect options={towns}/>
            <br/>

            <p>Maker</p>
            <MultiSelect options={makers}/>
            <br/>

            <button>Search</button>

        </>

    );
};

export default Home;
