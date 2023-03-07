import React from "react";
import { Trans, useTranslation } from "react-i18next";

const Bibliography = () => {
    
    React.useEffect(() => {
        document.title = 'Bibliography | French Playing Cards';        
    }, []);

    const {t} = useTranslation();

    return (
        <>
        <h2 className="page-header">{t("bibliography.header")}</h2>

        <img id="bibliography-mascot" src="/static/img/misc/bibliography-image.jpeg"/>

        <div className="bibliography-content">
            <h3>{t("bibliography.collections.title")}</h3>
            <p>
            <Trans i18nKey="bibliography.collections.bnf">
                <i>Bibliothèque nationale de France</i>.  The BnF has digitized more than 1800 items 
                in its playing card collections in the Cabinet des estampes.  To browse these holdings, 
                go to <a href="https://gallica.bnf.fr">https://gallica.bnf.fr</a>.  Select “images” in 
                the dropdown menu labeled “Tout Gallica,” then enter “JeuCart” in the search bar.  Users 
                can filter the results by author, century, and language.
            </Trans>
            </p>
            <p>
            <Trans i18nKey="bibliography.collections.musee">
                <i>Musée français de la carte à jouer</i>.  This museum, located in the Parisian suburb of 
                Issy-les-Moulineaux, contains exhibits about the history of French playing cards as well as 
                collections of cards and a library devoted to their history.  The Museum’s web site is 
                available <a href="https://www.museecarteajouer.com/">here</a>.
            </Trans>
            </p>
            <p>
            <Trans i18nKey="bibliography.collections.columbia">
                <i>Columbia University, Rare Book and Manuscript Library</i>.  Columbia conserves the Albert 
                Field Collection of Playing Cards, with more than 6300 individual decks.  A description and 
                access to a database can be found at <a href="https://dlc.library.columbia.edu/field_playing_cards">
                https://dlc.library.columbia.edu/field_playing_cards</a>.
            </Trans>
            </p>
            <p>
            <Trans i18nKey="bibliography.collections.yale">
                <i>Yale University, Beinecke Library.</i> The Beinecke holds the Cary Card Collection, consisting 
                of over 1000 whole or partial decks of cards and many other playing card-related items.  For a 
                description of the collection, and a link to searchable database, go to <a href="https://beinecke.library.yale.edu/collections/highlights/cary-playing-card-database">
                https://beinecke.library.yale.edu/collections/highlights/cary-playing-card-database</a>. There is 
                a useful essay describing the collection <a href="http://carycards.beinecke.library.yale.edu/CaryEssaysWeb.htm">
                here</a>.
            </Trans>
            </p>
        </div>

        <div className="bibliography-content">
            <h3>{t("bibliography.scholarship")}</h3>
            <p> 
                Allemagne, Henri-René d’. <i>Les Cartes à jouer du XIVe au XXe siècle</i>, 2 vols., Paris, 1906.
            </p>
            <p>
                D’Ambly, P. Boiteau. <i>Les cartes à jouer et la cartomancie</i>. Paris: Hachette, 1854.
            </p>
            <p> 
                Anonyme, "<a href='https://histoire-de-la-douane.org/de-la-fiscalite-des-jeux-de-cartes-a-travers-lhistoire/'>De la fiscalité des jeux de cartes à travers l'histoire</a>," web site of the <i>Association pour l'Histoire de l'Administration des Douanes</i>. Posted on 22 March 2018.
            </p>
            <p> 
                Belmas, Elisabeth.  <i>Jouer autrefois. Essai sur le jeu dans la France moderne, XVIe-XVIIIe siècle</i> 
                Seyssel: Champ Vallon, 2006.
            </p>
            <p> 
                Bert, Jean-François. <i>Comment pense un savant? Un physicien des Lumières et ses cartes à jouer</i>, 
                Paris: Anamosa, 2018.
            </p>
            <p> 
                Burke, Kristen. "Print and the Early Modern Playing Card," <i>Oxford Art Journal</i> 44-2 (2021), 185-205.
            </p>
            <p> 
                Bustarret, Claire, "<a href='https://journals.openedition.org/socio-anthropologie/2255'>La Carte à jouer, support d'écriture au XVIIIe siècle. Détournement, retourenment, revolution</a>," <i>Socio-anthropologie</i> (2014), 83-98.
            </p>
            <p>
                Court de Gébelin, Antoine. <i>Le Tarot</i>. Ed. Jean-Marie Lhote. Paris: Berg, 1983.
            </p>
            <p>
                Decker, Ronald and Michael Dummett. <i>A History of the Occult Tarot</i>.  London: Duckworth, 2013.
            </p>
            <p>
                Decker, Ronald, Thierry Depaulis and Michael Dummett. <i>A Wicked Pack of Cards: The Origins of the Occult Tarot</i>. 
                London: Duckworth, 1996.
            </p>
            <p> 
                Depaulis, Thierry. <i>Les Cartes de la Révolution: Cartes à jouer et propogande.</i> Issy-les-Moulineaux: 
                Musée français de la Carte à jouer, 1989.
            </p>
            <p> 
                Depaulis, Thierry. “Des ‘figures maussades & révoltantes’ : Diderot et les cartes à jouer,” <i>Le Vieux 
                Papier</i>, fasc. 412 (April 2014), pp. 256-64; fasc. 413 (July 2014), pp. 289-98; fasc. 414 (October 2014), 
                pp. 342-53; and fasc. 415 (January 2015), pp. 409-21.
            </p>
            <p>
                Depaulis, Thierry.  “The Tarot de Marseille:  Facts and Fallacies.” <i>The Playing-Card</i> 42 (2013-2014): 
                21-41, 101-120.
            </p>
            <p>
                Depaulis, Thierry. <i>Tarot, jeu et magie</i>. Paris: Bibliothèque Nationale, 1984.
            </p>
            <p> 
                Desbarats, Catherine.  “On Being Surprised: by New France’s Card Money, for Example,” <i>Canadian Historical 
                Review 102-1</i> (March 2021), 125-51.
            </p>
            <p>
                Dummett, Thomas. <i>The Game of Tarot:  From Ferrera to Salt Lake City</i>. London: Duckworth, 1980.
            </p>
            <p> 
                Dunkley, John. <i>Gambling: A Social and Moral Problem in France</i>, 1685-1792, Oxford: The Voltaire Foundation, 
                1985. 
            </p>
            <p>
                Freundlich, Francis. <i>Le Monde du jeu à Paris</i>, 1715-1800, Paris : Albin Michel, 1995.
            </p>
            <p>
                Halbronn, Jacques. <i>Recherches sur l’histoire de l’astrologie et du Tarot</i>. Paris:  Grand conjonction, 1993.
            </p>
            <p>
                Hargrave, Catherine Perry. <i>A History of Playing Cards and a Bibliography of Cards and Gaming</i>.  New York: Dover, 1966.
            </p>
            <p>
                Kavanagh, Thomas. <i>Dice, Cards, Wheels: A Different History of French Culture</i>. Philadelphia: University of Pennsylvania Press, 2005.
            </p>
            <p>
                Kavanaugh, <i>Thomas M. Enlightenment and the Shadows of Chance: The Novel and the Culture of Gambling in 
                Eighteenth-Century France</i>, Baltimore and London: The Johns Hopkins University Press, 1993.
            </p>
            <p>
                Keller, William B. <i>A Catalogue of the Cary Collection of Playing Cards in the Yale University Library.</i> 
                New Haven: The Library, 1981.
            </p>
            <p>
                Lynn, Michael R. “Jean Baptiste Alliette and the <i>Ecole de Magie</i> in late-eighteenth century Paris.”  In 
                Michael R. Lynn, ed. <i>Magic, Witchcraft, and Ghosts in the Enlightenment</i>. Routledge: Abingdon, Oxon, 
                2022: 100-122.
            </p>
            <p>
                Malone, Edward A. "The Use of Playing cards to Communicate Technical and Scientific Information," <i>Technical Communication</i> 55-1 (February 2008), 49-60.
            </p>
            <p>
                Merlin, Romain. <i>Origine des cartes à jouer</i>.  Paris: Chez l’auteur, 1869.
            </p>
            <p>
                Netchine, Ève, ed., <i>Jeux de princes, jeux de vilains</i>, Paris: Bibliothèque nationale de France / Seuil, 2009. <a href='http://expositions.bnf.fr/jeux/index.htm'>See also the online exhibition web site</a>.
            </p>
            <p>
                Piegeler, Hildegard. <i>Tarot:  Bilderwelten der Esoterik</i>. Munich: Wilhelm Fink, 2010.
            </p>
            <p>
                Ravel, Jeffrey. “On the Playing Cards of the Dulac Brothers in the Year II,” <i>Studies in Eighteenth-Century 
                Culture</i>, Vol. 52 (2023), pp. 325-367.
            </p>
            <p>
                Ravel, Jeffrey.  “Accommodation: The Policing of Used Playing Cards in Paris in the 1780s,” Pascal Bastien, 
                ed. <i>Paris, Policing, and Urban Sociability in Eighteenth-Century Paris</i>, Oxford University Studies in the 
                Enlightenment, forthcoming.
            </p>
            <p>
                Ravel, Jeffrey.  “Plus de rois, de dames, de valets”: Playing Cards During the French Revolution,” <i>Oxford 
                University Studies in the Enlightenment</i>, forthcoming.
            </p>
            <p>
                Spies-Gann, Paris Amanda.  “A Princely Education through Print: Stefano della Bella’s 1644 Jeux de Cartes Etched 
                for Louis XIV” <i>Getty Research Journal</i> no. 9 (2017): pp. 1-22.
            </p>
        </div>

        </>
    );
};

export default Bibliography;