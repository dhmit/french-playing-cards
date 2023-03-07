import React from "react";
import ImagePopup from "../ImagePopup";

const TarotDeck = () => {

    React.useEffect(() => {
        document.title = 'The Tarot Deck | French Playing Cards';        
    }, []);

    return (
    <>
        <h2 className="page-header"> The Tarot Deck </h2>

        <div className="material-subpage-intro">
            <img id="tarot-mascot" src={'/static/img/tarot/tarotMascot.jpeg'}/>
            <p className="material-subpage-blurb">
                Playing cards arrived in the Italian peninsula around the fourteenth century and 
                artists created the first Tarot cards not long afterwards.  Artists crafted these 
                early, hand-painted cards for use at Renaissance courts in such cities as Milan, 
                Florence, and Ferrara.  With nobles as customers, these cards demonstrated skill 
                and used high quality materials including gold and silver paint.  The cards here, 
                representing Love and the World, are from the workshop of Bonifacio Bembo in the 
                mid-15th century. 
            </p>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/love/Love.jpg'}/>
                    <p>
                        Love. Workshop of Bonifacio Bembo, 1445?  Source: Cary Collection of Playing Cards, Call # ITA09. Beinecke Rare Book and Manuscript Library, Yale University. 
                    </p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/love/World.jpg'}/>
                    <p>
                        World. Workshop of Bonifacio Bembo, 1445?  Source: Cary Collection of Playing Cards, Call # ITA09. Beinecke Rare Book and Manuscript Library, Yale University. 
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>
                    While the number of Tarot cards and their imagery varied initially, they 
                    ultimately settled into a set of twenty-two with themes that have lasted 
                    until the present.  Thus, by the early eighteenth century a pack of cards 
                    such as the Tarot de Marseille included fifty-six regular playing cards 
                    (ace through ten and four face cards including King, Queen, Knight, and Jack) 
                    using the suits of cups, coins, swords, and batons.  When the regular deck was 
                    combined with the twenty-two Tarot cards it resulted in a deck 
                    of seventy-eight cards.  Over time, manufacturers regularized the subjects of 
                    the Tarot cards and their order.  Traditionally, these cards are numbered from 
                    one to twenty-one with the Fool card remaining unnumbered. 
                </p>
                <br/>
                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/suits/King.Coins.jpg'}/>
                    <p>
                    King of Coins. Marseilles Tarot Deck, Jean Dodal, 1701-1715.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (5, 76). 
                    </p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/suits/Queen.Swords.jpg'}/>
                    <p>
                    Queen of Swords.  Marseilles Tarot Deck, Jean Dodal, 1701-1715.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (5, 76).                    
                    </p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/suits/Knight.Batons.jpg'}/>
                    <p>
                    Knight of Batons.  Marseilles Tarot Deck, Jean Dodal, 1701-1715.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (5, 76).     
                    </p> 
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/suits/Jack.Cups.jpg'}/>
                    <p>
                    Jack of Cups.  Marseilles Tarot Deck, Jean Dodal, 1701-1715.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (5, 76).      
                    </p> 
                </div>
            </div>
        </div>
            
        <br/>
        
        <div className='tarot-subpage-item'>
            <div className='tarot-subpage-item-contents'>
                <p>
                    Although largely understood today as tools for divination and fortune-telling, 
                    Tarot cards originally served as trumps in a set of card games.  Just as in 
                    modern bridge, where one of the suits is designated the trump suit through a 
                    bidding process, Tarot games utilized the twenty-two Tarot cards as trumps.  
                    The standard images of the twenty-two cards include the Fool, the Juggler, the 
                    Popess, the Empress, the Emperor, the Pope, the Lovers, The Chariot, Justice, 
                    the Hermit, the Wheel of Fortune, Strength, the Hanged Man, Death (untitled), 
                    Temperance, the Devil, the House of God, the Star, the Moon, the Sun, Judgement, 
                    and the World.  Variations existed.  For some Tarot decks the Popess turned 
                    into the High Priestess or Juno while the Pope became the High Priest or Jupiter.  The Juggler sometimes appeared as the Magician. During the French Revolution when some people frowned on images of religion and monarchy, the Empress and Emperor became a Grandmother and Grandfather. 
                </p>

                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/trump/Fool.jpg'}/>
                    <p>
                    The Fool.  Marseilles Tarot Deck, Jean Dodal, 1701-1715.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (5, 76).
                    </p>
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/trump/Juggler.jpg'}/>
                    <p>
                    The Juggler.  Marseilles Tarot Deck, Jean Dodal, 1701-1715.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (5, 76).                     
                    </p>
                </div>
                </div>

                <br/>
                <br/>

                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/trump/Death.jpg'}/>
                    <p>
                    Death.  Marseilles Tarot Deck, Jean Dodal, 1701-1715.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (5, 76). 
                    </p> 
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/trump/HangedMan.jpg'}/>
                    <p>
                    Hanged Man.  Marseilles Tarot Deck, Jean Dodal, 1701-1715.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (5, 76).  
                    </p> 
                </div>
                </div>

                <br/>
                <br/>

                <div className='tarot-subpage-item-images'>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/trump/Grandmother.Rev.jpg'}/>
                    <p>
                    Grandmother.  Italian Tarot Cards in the Revolutionary Style, Jean Isnard, 1794.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (2, 16)-BOITE ECU.  
                    </p> 
                </div>
                <div className='tarot-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/tarot/deck/trump/Grandfather.rev.jpg'}/>
                    <p>
                    Grandfather.  Italian Tarot Cards in the Revolutionary Style, Jean Isnard, 1794.  Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (2, 16)-BOITE ECU.  
                    </p> 
                </div>
                </div>
            </div>
        </div>
        
        </div>

        <p id='TarotDeckNote'>
        To see all the cards in the 1701-1715 Marseilles Tarot Deck from the Bibliothèque nationale de France, click <a href='https://gallica.bnf.fr/ark:/12148/btv1b10537343h.r=tarot%20de%20marseille?rk=21459;2'>here</a>. 
        </p>

        <p id='TarotDeckNote'>
        To see the all the cards in the 1794 Revolutionary Tarot deck from the Bibliothèque nationale de France, click <a href='https://gallica.bnf.fr/ark:/12148/btv1b10510984v.r=tarot%20révolutionnaire?rk=42918;4'>here</a>. 
        </p>

    </>
    );
};

export default TarotDeck;