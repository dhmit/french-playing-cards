import React from "react";

const About = () => {

    React.useEffect(() => {
        document.title = 'About | French Playing Cards';        
    }, []);

    return (
        <>
        <h2 className="page-header"> About page </h2>
        
        <div id={"AboutIntro"}>
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p className="About-initial-blurb">
                The iconography, taxation, manufacture and uses of playing cards in France 
                underwent substantial changes from 1650 to 1850. By the 1780s, an “Old 
                Regime” deck of cards had emerged, characterized by the standardization of 
                face cards, the state's increasing efforts to extract tax revenue from their 
                producers, their manufacture via the guild system, and the gaming and non-gaming uses 
                the kings subjects made of new and used decks of cards. The Revolution of 1789, 
                however, temporarily eliminated the card-makers guild and the excise tax levied on 
                cards, and mandated the suppression of kings, queens, and jacks on face cards. By 
                the time of the Directory in the late 1790s, and even more so during the First Empire, 
                Old Regime practices crept back into the design, taxation, and uses of playing cards. 
                At the same time, the technologies of production evolved and the industry consolidated 
                from dozens of manufacturers around the kingdom to a half dozen or so firms. The 
                history of playing cards over these two centuries offers insight into questions of 
                rupture and continuity in French politics, culture, and economics across the 
                revolutionary divide. 
            </p>
        </div>
        
        <p id={"AboutPageContents"}>
            This web site is one outcome of a larger project by <a href="https://history.mit.edu/people/jeffrey-s-ravel/">Jeffrey Ravel</a>, Professor of History at MIT, to write this history.  At a later date, we hope to add a feature that will allow users to play popular Old Regime and Revolutionary card games online, selecting the historical deck with which they will play.
            <br/>
            <br/>
            Professor Ravel and his team wish to thank the <a href="https://www.bnf.fr/en/bibliotheque-nationale-de-france-catalogue-general">Bibliothèque nationale de France</a> (BnF), 
            which has provided the digital versions of playing cards and the metadata we make available on our site. Users are 
            invited to explore the extensive digital reproductions of playing cards in the collections of the BnF, which the 
            Library makes available on its <a href="https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop">Gallica web site</a>. We are also grateful to 
            the <a href="https://digitalhumanities.mit.edu/">MIT Programs in the Digital Humanities</a> and <a href="https://www.performantsoftware.com">Performant Software</a> for technical support.
        </p>

        <div id={'AboutProfiles'}>
            <h3>Playing Card Web Site Development Members</h3>
            <p>Rhea Bhattacharjee, MIT Class of 2025</p>
            <p>Alyssa Choi, Wellesley College Class of 2024</p>
            <p>Nyana Wright, Wellesley College Class of 2024</p>
        </div>
        </>
    );
};

export default About;