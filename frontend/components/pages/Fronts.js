import React from "react";
import ImagePopup from "../ImagePopup";

const Fronts = () => {

    React.useEffect(() => {
        document.title = 'Fronts | French Playing Cards';        
    }, []);

    return (
    <>
        <h2 className="page-header"> Fronts: The Queen of Hearts </h2>

        <div className="material-subpage-intro">
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p className="material-subpage-blurb">
                Most French playing cards before the nineteenth century were manufactured using stencils. 
                The stencil process for point cards (ace through ten) was simple, involving only one 
                color and a design that was standardized across the kingdom. Designs for face cards, 
                however (the king, queen, and jack), varied widely, and utilized four or five different 
                colors. Furthermore, for purposes of control and taxation, the state before 1789 and 
                after 1797 demanded that manufacturers adhere to a single authorized design. 
                <br/>
                <br/>
                An analysis of the variations in face card design from the Old Regime through the 
                Revolution of 1848 reveals substantial variation across time that can be explained by 
                changing political, economic, and cultural factors. Here we focus on the Queen of Hearts, 
                but those interested in exploring changes in the iconography of other French face cards 
                in this period should explore our face card iconography search tool.
            </p>
        </div>

        <div className='material-subpage-item'>
        <h3>The Old Regime (to 1789)</h3>
            <div className='material-subpage-item-contents'>
                <p>
                By 1750, the crown had divided the kingdom into nine regions for purposes of collecting excise 
                taxes on the manufacture of playing cards. Each district had a unique face card iconography
                which the tax bureau used to ensure compliance with taxation procedures. Face cards that
                deviated from these designs were alleged to be “fraudulent,” i.e., their manufacturers had 
                not paid the excise tax. Below you see official examples of the Queen of Hearts from the Paris, 
                Guyenne, and Dauphiné regions.
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/fronts/old-regime/paris.jpeg'/>
                    <p>
                        Paris. Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-205 (7)
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/old-regime/guyenne.jpeg'}/>
                    <p>
                    Guyenne.  Source: Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (3, 82)                    
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/old-regime/dauphine.jpeg'}/>
                    <p>
                    Dauphiné.  Source: Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (2, 40)    
                    </p> 
                    {/* TODO: make the images all the same height!! */}
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>The French Revolution (1789-1799)</h3>
            <div className='material-subpage-item-contents'>
                <p>
                    In the early years of the Revolution, the legislative assemblies abolished the 
                    guilds that had controlled the card-making industry and abolished the excise tax 
                    levied on playing cards.  The result was that anyone with sufficient capital could 
                    open a card-making shop, without being constrained by the official regional playing 
                    card designs that characterized the Old Regime.  In addition, rising anti-monarchical 
                    sentiment encouraged revolutionary card-makers to find alternatives to the traditional 
                    face card trio of kings, queens, and jacks.
                    <br/>
                    <br/>
                    Card-makers experimented with many iconographies in the 1790s.  We provide a sampling 
                    of those designs below.
                </p>
                <br/>
                <h4>A. Genuises, Liberties, Equalities</h4>
                <p>
                    In Spring 1793, Urbain Jaume and Jean-Démosthène Dugourc took out a patent on 
                    a new face card design that converted Kings to “Genuises,” Queens to “Liberties,” 
                    and Jacks to “Equalities.”  Their labels, and in some instances their designs, were 
                    emulated by other card-makers throughout the kingdom.  In some cases only modest design 
                    changes were made to the Old Regime designs.  The right-hand example below, although 
                    stylistically similar to prerevolutionary versions of the Queen of Hearts, removes the 
                    queen's crown and puts a pike with a phrygian bonnet, a symbol of Republican Rome from 
                    antiquity, in her left hand. 
                </p>

                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/revolution/Jaume.Rev.1.JPEG'}/>
                    <p>
                    Jaume and Dugourc original design.  “Freedom of Religion.” Source: Bibliothèque nationale de France, RESERVE BOITE ECU-KH-204 (6).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/revolution/Sigogne.Rev.JPEG'}/>

                    <p>
                    Jaume and Dugourc variant.  “Freedom of the Press.” Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (5, 154).                    
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/revolution/Jaume.Rustic.JPEG'}/>
                    <p>
                    Old Regime “Liberty” modification. Source:  Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (4, 102).    
                    </p> 
                    {/* TODO: make the images all the same height!! */}
                </div>
                <br/>
                </div>
                <br/>
            <p id='SourceFooter'> Source:  Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (1, 14) </p>

            <br/>
            <h4>B.  SVB, ESC, and Bézu Decks</h4>
                <p>
                    Three other notable revolutionary designs were the Sages, Vertus, Braves deck (wise ones, virtuous ones, 
                    brave ones), now labeled SVB; the Eléments, Saisons, Cultivateurs deck (Platonic elements, seasons of the year, 
                    farmers) deck, now labeled ESC; and a secular, rationalized deck designed by a card-maker in the Champagne region 
                    named Bézu.  The queen of Hearts in the deck the left is the “virtue” of justice, and in the middle and on the 
                    right are variations on the season of summer. 
                </p>

                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/svb-esc-bezu/SVB.1.JPEG'}/>
                    <p>
                    SVB.  Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-204 (1).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/svb-esc-bezu/ESC.1.JPEG'}/>
                    <p>
                    ESC.  Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (5BIS, 164).                    
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/svb-esc-bezu/Bezu.1.jpg'}/>
                    <p>
                    Bézu. Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-204-BOITE FOL.    
                    </p> 
                </div>
                <br/>
            </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Napoleon (1799-1815)</h3>
            <div className='material-subpage-item-contents'>
                <p>
                By the time Napoleon came to power, the French state had resumed the excise tax on the manufacture of playing cards.  
                In addition, Napoleon's officials decided to create one uniform face card design for the entire nation.  
                In 1810 they asked the great revolutionary and imperial artist Jacques-Louis David to design a new deck of cards.  
                David returned to the iconography of the Old Regime, but endowed each king, queen, and jack with historically 
                appropriate costumes. When his design did not prove popular, the regime turned to a designer named Nicolas-Marie 
                Gatteaux, who created designs in 1813 that were more faithful to the appearance of the Old Regime cards, and 
                therefore more popular.  In 1815, a designer named Gustave-Armand Houbigant patented a new iconography with a more 
                romantic, medieval look.
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/napoleon/David.JPEG'}/>
                    <p>
                        David.  Source:  Bibliothèque nationale de France, Cabinet des Estampes, PET FOL-KH-34 (C, 28).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/napoleon/Gatteaux.JPEG'}/>
                    <p>
                        Gatteaux.  Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (7BIS, 326).                    
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/napoleon/Houbigant.jpg'}/>
                    <p>
                    Houbigant.  Source:  British Library, 1896,0501.1292.1-12.    
                    </p> 
                    {/* TODO: make the images all the same height!! */}
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>Revolution and the Occult in the Nineteenth Century (1815-1848)</h3>
            <div className='material-subpage-item-contents'>
                <p>
                After the fall of Napoleon in 1815, French politics veered between monarchy and republicanism.  
                Decks of cards designed in the revolutionary years of 1830 and 1848 expressed the hope for change, 
                while other decks of cards tapped into occult tendencies in the early nineteenth century.
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/1815-1848/1830.Barricades.JPEG'}/>
                    <p>
                        The Revolution of 1830.  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (10, 399-400).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/1815-1848/1848.JPEG'}/>
                    <p>
                        The Revolution of 1848.  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (A, 7)-BOITE ECU.                    
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/1815-1848/Cartomancy.JPEG'}/>
                    <p>
                    Cartomancy, between 1814 and 1830.  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (3, 29)-BOITE ECU.    
                    </p> 
                    {/* TODO: make the images all the same height!! */}
                </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Fronts;