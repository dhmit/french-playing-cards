import React from "react";
import ImagePopup from "../ImagePopup";

const Envelopes = () => {

    React.useEffect(() => {
        document.title = 'Envelopes | French Playing Cards';        
    }, []);

    return (
    <>
        <h2 className="page-header"> Envelopes </h2>

        <div className="material-subpage-intro">
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p className="material-subpage-blurb">
                French playing card manufacturers in these centuries packaged their cards in paper wrappers for sale to the 
                public.  The look of these wrappers was not controlled by the royal taxing agents, so card-makers were free 
                to create their own wrapper designs, within implicitly understood ideological limits.  Before the Revolution, 
                manufacturers utilized the wrappers to communicate patronage of their product, brand names, and the urban 
                locations of their shops.  The images imprinted on the wrappers might reference the French monarchy, or other 
                kings.  As with face card iconography, once the Revolution broke out in 1789 the wrappers began to incorporate 
                revolutionary images and mottos.  There is some evidence to suggest that envelope design in the Napoleonic 
                period may have toned down the ideological references of the 1790s.
                <br/>
                <br/>
                The card images below and the associated metadata are courtesy of the Gallica site of the Bibilothèque 
                nationale de France.
            </p>
        </div>

        <div className='material-subpage-item'>
        <h3>Epinal Playing Card Wrappers, First Half of the Seventeenth Century</h3>
            <div className='material-subpage-item-contents'>
                <p>
                In the first half of the seventeenth century, card-makers in the town of Épinal, in Lorraine, emphasized 
                heraldry, architecture, and the crown on their card wrappers.
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/epinal/Epinal1.JPEG'/>
                    <p>
                        Left-hand wrapper. “FAICTES A ESPINAL.  CARTES FINES FAITES PAR JEHAN HEMAU A ESPINAL”. (Between 1623 
                        and 1630.)
                        <br />
                        <br />
                        Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (B, 43)-BOITE ECU.
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/epinal/Epinal2.JPEG'/>
                    <p>
                        Right-hand wrapper.  “CLAUDE GERARD.  CARTES FINES FAITE PAR CLAUDE GERARD A ESPINA”. (1650)
                        <br />
                        <br />
                        Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (B, 45)-BOITE ECU.
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Rouen Playing Card Wrappers, Second Half of the Seventeenth Century</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    These two envelope examples, from the second half of the seventeenth century in Rouen, are linked by a 
                    central panel in which two allegorical figures, labeled “JEUNESSE” (youth) and “RICHESSE,” (wealth) 
                    support a central cartouche.  In one case the cartouche puns on the name of the card manufacturer
                    (Lepinne, or pine tree), while in the other it contains a representation of the biblical King David, 
                    who was frequently depicted on the King of Spades before 1789.
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/rouen/Rouen1.jpg'/>
                    <p>
                        Left-hand wrapper. Cartouche: “L’EPINNE ESTANT EN FLEUR SENT UN TRES BON ODEUR.” Bottom legend: 
                        “CARTES TRES FINNES DE EDME DE LEPINNE DEMT AU BAS DE LE RUE DES BELLES FEMMES A ROUEN.”
                        <br />
                        <br />
                        Source: Bibliothèque nationale de France, Cabinet des Estampes, PET FOL-KH-34 (A, 32).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/rouen/Rouen2.jpg'/>
                    <p>
                        Right-hand wrapper.  Cartouche: “DAVID DE SA HARPE LOUE DIEU DE TOUT SON COEUR.”  Bottom legend:  
                        “CARTES TRES FINES FAITES PAR ANTO”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (1BIS, 54BIS).
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Eighteenth-Century Examples of Card Wrappers</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    These two examples from the eighteenth century both have a focus on monarchy.  The one on the left 
                    displays a French king on horseback in a cartouche held up by courtiers.  The legend encircling the 
                    cartouche claims that the king is “the hero of all kings.”  The central panel of the wrapper on the 
                    right represents the wife of the heir to the French throne (the “Dauphine”) in a painterly pose.  
                    The Parisian manufacturer claims to be her authorized card-maker.
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/eighteenth-century/EighteenthCentury1.JPEG'/>
                    <p>
                        Left-hand wrapper.  Cartouche: “JE ME DIS LE HEROS DES ROYS ESTANT POURVEU DE CHARGES DES FRANCOIS”  
                        Legend at bottom: “CARTES TRES FINES FAITES AU HEROS DES ROIS ET CE VEND TOUTES SORTES DE PAPIER FIN 
                        ANCRE DOUBLE”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, PET FOL-KH-34 (A, 30).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/eighteenth-century/EighteenthCentury2.JPEG'/>
                    <p>
                        Right-hand wrapper: Legend at bottom: “CARTES TRES FINES FAITES PAR FRANCOIS GUILLOT MRE CARTIER A 
                        PARIS DEMEURANT RUE DE SEINE VIS A VIS LA RUE DU COLOMBIER PRES CEL. DE BUSY VAND TOUT CE QUI 
                        CONCERNE LECRITURE A MADAMME LA DAUPHINE”  (The note at the bottom, “ENTIER,” indicates that the 
                        wrapper contained a full deck of 52 cards.)
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (1BIS, 54BIS).
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>A Revolutionary Modification to a Card Wrapper</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    Card-makers had to adapt their wrappers to revolutionary ideals, just as they had to modify the 
                    iconography of the face cards they manufactured.  Sometimes the changes were subtle. On the left is a 
                    prervolutionary bookplate produced by the Parisian card-maker and stationer Hugues Chassonnier that 
                    features the three biblical kings from the East who bore gifts for the Christ child.  The monarch on 
                    the left points to the star in the sky that prompted their journey to Bethlehem.  This nameplate, 
                    produced in the last two decades of the Old Regime, served as the Chassonnier shop’s trademark; it may 
                    have imitated the sign that hung outside his shop.  On the right is a playing card wrapper manufactured 
                    by Chassonnier in the early years of the Revolution.  Here the three figures are similar enough to the 
                    prerevolutionary bookplate that the card-makers’ Parisian customers would have recognized the manufacturer.  
                    But the kings have been stripped of their gifts, and their crowns have been replaced by turbans.  
                    The flap at the top of the envelope labels them as “moors,” not kings.  And the text at the bottom informs 
                    consumers that the cards in the wrapper were manufactured by “Citizen” Chassonnier.
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/chassonneris/Chassonneris1.JPEG'/>
                    <p>
                        Left-hand bookplate, between 1766 and 1789.  “Rue de la Verrerie au coin de la Rue Coquilles, 
                        en face de la Rue Bardubec A Paris.  Md. Fabricant de cartes à jouer, tient magasin de papier 
                        tant d’hollande, que de Francepour l’Ecriture, et le dessein, fait toutes sortes de registres, 
                        et Cartons de toutes especes, Vend des Porte-Feuilles en Maroquin, et autres, Cire a cacheter, 
                        Plumes d’hollande, Crayons fins d’angleterre, Canifs, Gratoirs, et Poinçons, Encre de la meiileur 
                        qualité, Papiers à Vignettes, Enveloppes, et tout ce qui concerne la Fourniture des Bureaux, le tout 
                        à juste prix.”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (5BIS, 162B).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/chassonneris/Chassonneris2.JPEG'/>
                    <p>
                        Right-hand wrapper, ca. 1794? Legend at the top: “AT THE THREE MOORS JEU DE PIQUET”   
                        (Piquet was a popular card game requiring a 32-card deck.). Legend at the bottom: “CARTES TRES FINES 
                        FAITES PAR LE CITOYEN CHASSONNERIS MD CARTIER PAPETIER, RUE DE LA VERRERIE VIS A VIS LA RUE COQUILLES 
                        VEND TOUT CE QUI CONCERNE L’ECRITURE ET FAIT”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (4, 112).
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>“I Shine for All”</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    Other card-makers engraved more overtly revolutionary images and slogans on their card wrappers.  
                    On the left, a wrapper printed by the Lyonnais card-maker Manus also features a celestial body in the 
                    upper-right hand corner of the main panel, in this case the sun, with the egalitarian legend “Je luit pour tous.”  
                    (I shine for all.). A seated female allegory, prominently featured, gazes at a ship on the horizon, raising her 
                    arm in a salute to the idea of hope (“A LESPERANCE”).  The wrapper on the right, created by the Grenoblois 
                    card-makers Cheminade and Repellin, repeats the “sun shines for all” motto on the side flaps of the envelope.  
                    In the center panel a cartouche featuring an ancient Roman fasces and a phrygian bonnet is encircled by the 
                    words “REPUBLIQUE FRANCAISE.”  The labels “LIBERTE” and “EGALITE” are printed above.  Consumers would have 
                    readily recognized the republican sympathies of both card-makers.
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/i-shine-for-all/Shine1.JPEG'/>
                    <p>
                        Left-hand wrapper.  Legend at bottom: “CARTES FINES, Faites par ANT. MANUS, Marchand Cartier, 
                        demeurant Place du Plâtre, maison Tolozan, No 3, du côté de rue Longue, au troisieme, A LYON”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (1, 21).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/i-shine-for-all/Shine2.JPEG'/>
                    <p>
                        Right-hand wrapper. Side flaps: “LE SOLEIL LUIT POUR TOUT”. Center panel: “LIBERTE EGALITE REPUBLIQUE 
                        FRANCAISE CARTYES FINES”. Bottom panel: “FAITES PAR CHEMINADE ET REPELIN MDS CARTIERS RUE NEUVE VIS A 
                        VIS CTS JACOBINS A GRENOBLE”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (2, 33).
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Napoleonic Card Wrappers</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    These two examples, from the first decade of the nineteenth century, display designs that eschew both 
                    Old Regime royal patronage and Revolutionary ideological concerns.  The envelope on the left, designed 
                    to package a deck of Gatteaux cards around 1810-1815, features two winged, classicizing angels sounding 
                    their horns.  (On the Gatteaux deck, see the card “fronts” page on this site.)  Between them they support 
                    a small cartouche that contains the symbols of the four card suits.  On the right, the envelope printed by 
                    the Widon Delatre, a Parisian card-maker, also has a relatively simple cartouche evoking the biblical King 
                    Solomon. To his left and right, cornucopias overflow with playing cards, while the flap below records the 
                    manufacturer’s shop in a plain typeface.  While the iconography of both wrappers references classical and 
                    biblical imagery, it also reproduces images of card suits and card decks that would have been familiar to 
                    gamblers in the period.
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/napoleon/Napoleon1.JPEG'/>
                    <p>
                        Left-hand wrapper. No text.
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (10, 416).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/napoleon/Napoleon2.JPEG'/>
                    <p>
                        Right-hand wrapper. “CARTES. FABRIQUE DE CARTES DE LA VE DELATRE RUE HELVETIUS NO 37 A PARIS”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (5BIS, 159).
                    </p>
                </div>
                </div>
            </div>
        </div>

     </>
    );
};

export default Envelopes;