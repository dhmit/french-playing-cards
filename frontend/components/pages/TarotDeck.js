import React from "react";
import ImagePopup from "../ImagePopup";
import {Trans, useTranslation} from "react-i18next";

const TarotDeck = () => {

    React.useEffect(() => {
        document.title = "The Tarot Deck | French Playing Cards";        
    }, []);

    const {t} = useTranslation();

    return (
        <>
            <h2 className="page-header">{t("tarot.deck.title")}</h2>

            <div className="material-subpage-intro">
                <img id="tarot-mascot" src={"/static/img/tarot/tarotMascot.jpeg"}/>
                <p className="material-subpage-blurb">{t("tarot.deck.intro")}</p>
            </div>

            <div className='tarot-subpage-item'>
                <div className='tarot-subpage-item-contents'>
                    <div className='tarot-subpage-item-images'>
                        <div className='tarot-subpage-item-image-caption'>
                            <ImagePopup src={"/static/img/tarot/deck/love/Love.jpg"}/>
                            <p>{t("tarot.deck.cards.love")}</p>
                        </div>
                        <div className='tarot-subpage-item-image-caption'>
                            <ImagePopup src={"/static/img/tarot/deck/love/World.jpg"}/>
                            <p>{t("tarot.deck.cards.world")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='tarot-subpage-item'>
                <div className='tarot-subpage-item-contents'>
                    <p>{t("tarot.deck.para1")}</p>
                    <br/>
                    <div className='tarot-subpage-item-images'>
                        <div className='tarot-subpage-item-image-caption'>
                            <ImagePopup src={"/static/img/tarot/deck/suits/King.Coins.jpg"}/>
                            <p>{t("tarot.deck.cards.king")}</p>
                        </div>
                        <div className='tarot-subpage-item-image-caption'>
                            <ImagePopup src={"/static/img/tarot/deck/suits/Queen.Swords.jpg"}/>
                            <p>{t("tarot.deck.cards.queen")}</p>
                        </div>
                        <div className='tarot-subpage-item-image-caption'>
                            <ImagePopup src={"/static/img/tarot/deck/suits/Knight.Batons.jpg"}/>
                            <p>{t("tarot.deck.cards.knight")}</p> 
                        </div>
                        <div className='tarot-subpage-item-image-caption'>
                            <ImagePopup src={"/static/img/tarot/deck/suits/Jack.Cups.jpg"}/>
                            <p>{t("tarot.deck.cards.jack")}</p> 
                        </div>
                    </div>
                </div>
            
                <br/>
        
                <div className='tarot-subpage-item'>
                    <div className='tarot-subpage-item-contents'>
                        <p>{t("tarot.deck.para2")}</p>

                        <div className='tarot-subpage-item-images'>
                            <div className='tarot-subpage-item-image-caption'>
                                <ImagePopup src={"/static/img/tarot/deck/trump/Fool.jpg"}/>
                                <p>{t("tarot.deck.cards.fool")}</p>
                            </div>
                            <div className='tarot-subpage-item-image-caption'>
                                <ImagePopup src={"/static/img/tarot/deck/trump/Juggler.jpg"}/>
                                <p>{t("tarot.deck.cards.juggler")} </p>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className='tarot-subpage-item-images'>
                            <div className='tarot-subpage-item-image-caption'>
                                <ImagePopup src={"/static/img/tarot/deck/trump/Death.jpg"}/>
                                <p>{t("tarot.deck.cards.death")}</p> 
                            </div>
                            <div className='tarot-subpage-item-image-caption'>
                                <ImagePopup src={"/static/img/tarot/deck/trump/HangedMan.jpg"}/>
                                <p>{t("tarot.deck.cards.hangedman")}</p> 
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className='tarot-subpage-item-images'>
                            <div className='tarot-subpage-item-image-caption'>
                                <ImagePopup src={"/static/img/tarot/deck/trump/Grandmother.Rev.jpg"}/>
                                <p>{t("tarot.deck.cards.grandmother")}</p> 
                            </div>
                            <div className='tarot-subpage-item-image-caption'>
                                <ImagePopup src={"/static/img/tarot/deck/trump/Grandfather.rev.jpg"}/>
                                <p>{t("tarot.deck.cards.grandfather")}</p> 
                            </div>
                        </div>
                    </div>
                </div>
        
            </div>

            <p id='TarotDeckNote'><Trans i18nKey="tarot.deck.note1">
        To see all the cards in the 1701-1715 Marseilles Tarot Deck from the Bibliothèque nationale de France, click <a href='https://gallica.bnf.fr/ark:/12148/btv1b10537343h.r=tarot%20de%20marseille?rk=21459;2'>here</a>. 
            </Trans></p>

            <p id='TarotDeckNote'><Trans i18nKey="tarot.deck.note2">
        To see the all the cards in the 1794 Revolutionary Tarot deck from the Bibliothèque nationale de France, click <a href='https://gallica.bnf.fr/ark:/12148/btv1b10510984v.r=tarot%20révolutionnaire?rk=42918;4'>here</a>. 
            </Trans></p>

        </>
    );
};

export default TarotDeck;