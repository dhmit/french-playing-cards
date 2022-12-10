import React from "react";
import ImageHover from "../ImageHover";

const Backs = () => {

    React.useEffect(() => {
        document.title = 'Backs | French Playing Cards';        
    }, []);

    return (
    <>
        <h2 className="page-header"> Backs </h2>

        <div className="material-subpage-intro">
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p id="back-text" className="material-subpage-blurb">
                The backs of playing cards in France were left blank until the 1820s. Because paper was valuable, 
                card players would not throw out their cards when they were too worn to be useful for gaming. Instead, 
                people would use the backs of the cards for various purposes, some practical and some more fanciful. 
                The examples below, drawn from the collections of the <i>Bibliothèque nationale de France</i>, capture some 
                of these uses. To see the front of the card in question, please pass your cursor over it.
            </p>
            <img id="back-intro" src={'/static/img/materials/materialsBacks.jpeg'}/>
        </div>

        <div className='material-subpage-item'>
        <h3>Library Card Catalogue</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    In the decades before the French Revolution, bibliophiles realized that they could utilize used playing 
                    cards to catalogue their book collections.  Surviving playing cards from the period suggest that this had 
                    become the most frequent use for discarded playing cards by the end of the eighteenth century.
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/library-card-catalogue/Loudun.JPEG" src2="/static/img/materials/backs/library-card-catalogue/Loudon-front.JPEG"/>
                    </div>
                </div>
                <p className="back-caption">
                    Transcription: “Chap. 2892. Cruels effets de la vengeance du Cardinal de Richelieu ou Histoire des diables 
                    de Loudun er d’Urbain Grandier. Amsterdam, Roger, 1716. In-12–veau"
                    <br />
                    Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-205 (18)
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Legal Case Label</h3>
            <div className='material-subpage-item-contents'>
                <p>
                After card catalogues, the second most common usage for the backs of discarded playing cards was as filing 
                labels for legal cases.
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/legal-case/legal-case.jpg" src2="/static/img/materials/backs/legal-case/Legal case front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                    Transcription: “Apointement en droit pour Claude des Chavanes, Sieur de Beauregard, contre Sieur Claude 
                    Pesant Bourgeois de Villefranche. Mr. Jacques Bord. Dubost. Vermorel.”
                    <br />
                    Source: Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (1, 14)
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Money</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    During the French Revolution, the government printed <i>billets de confiance</i>, or small denomination bills, 
                    on the backs of used playing cards to supplement the printed bills known <i>assignats</i>.
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/money/money.JPEG" src2="/static/img/materials/backs/money/Money front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                    Transcription: “Société patriotique, Ville de S. Maixent, Bon pour quinze sols. Billets de confiance 
                    remboursables en assignats de deux cent livres et au sessous. No. 2895, 1791.”
                    <br />
                    Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (5, 145-147)
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Meat Ration</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    The military printed meat ration cards on the backs of used playing cards.
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/meat-ration/ration.JPEG" src2="/static/img/materials/backs/meat-ration/ration-front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                    Transcription: “Infanterie, Viande. Trois Rations. Controllé.”
                    <br />
                    Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (3, 105)
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Business Cards</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    Merchants in Paris and other cities would print their business cards on the back of used playing cards.
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/business-cards/Business.JPEG" src2="/static/img/materials/backs/business-cards/business front.JPEG"/>
                    </div>
                </div>
                <p className="back-caption">
                    Transcription: “Bienvenu Samson, Négociant au Bourget, près Paris, ci-devant à St.-Denis. Tient magasin 
                    de Vons, Eaux-de-vie, Epicerie.”
                    <br />
                    Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (7, 210).
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Flash Cards</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    The backs of cards were used to teach spelling and grammar
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/flash-cards/flash card.jpg" src2="/static/img/materials/backs/flash-cards/flash card front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                    Transcription:  “avoir infinitive – present”
                    <br />
                    Source: Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (1, 16).
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Call and Response</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    The backs of used playing cards might be repurposed for provocative parlor games.
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/call-and-response/89-99 Bezu.JPEG" src2="/static/img/materials/backs/call-and-response/Bezu front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                    Transcription: “Etes-vous séduisant?”
                    <br />
                    Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (5, 153)
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Pastoral Drawing</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    An unknown artist used the back of this Jack of Clubs to sketch a pastoral scene.
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/pastoral-drawing/Pastoral Drawing.jpg" src2="/static/img/materials/backs/pastoral-drawing/Pastoral front.jpg" />
                    </div>
                </div>
                <p className="back-caption">
                    Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-205 (18)
                </p>
            </div>
        </div>
    </>
    );
};

export default Backs;