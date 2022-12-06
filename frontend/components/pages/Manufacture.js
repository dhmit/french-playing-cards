import React from "react";

const Manufacture = () => {

    React.useEffect(() => {
        document.title = 'Manufacture | French Playing Cards';        
    }, []);

    return (
        <>
        <h2 className="page-header"> Manufacture </h2>

        <h3 id="manufacture-header"> Manufacturing Playing Cards in France Before 1800 </h3>

        <div className="manufacture-content">
            <div className="manufacture-image-1-9-container">
                <img className="manufacture-image-1-9" src="/static/img/manufacture/Image 1.jpg" />
            </div>
            <p className="manufacture-caption">
                Image 1. <i>The Workshop of a Parisian Playing Card Maker</i>, gouache, early 1690s, <i>Musée Carnavalet</i>. 
            </p>
            <p>
                The image above, painted to decorate a hand fan, depicts a lively, chaotic scene in a card-maker’s shop 
                on the Ile de la Cité in Paris overlooking the Pont Neuf and the Seine River at the end of the seventeenth 
                century. Some workers create the paper stock on which the cards are printed, while others paint the cards 
                and then cut and sort them into decks.  Shopkeepers sell finished decks to well-appointed customers, while 
                cats and dogs cavort in the foreground among the discards from the manufacturing process.  Although the shop 
                looks disorderly, the steps involved in making commercial playing cards were well thought-out and efficient.  
                Thanks to two later, detailed discussions of the process, we have a good idea of how most playing cards in 
                France were made before the French Revolution.
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 2.jpg" />
            </div>
            <p className="manufacture-caption">
                Image 2. Detail from Plate 1 of Duhamel du Monceau, <i>Art du cartier</i> (Paris: Saillant & Nyon and Desaint, 1761).
            </p>
            <p>
                The first step in the process was to create the card stock.  Guildsmen combined three different types of paper 
                into a composite that absorbed the paint used to decorate the cards, but also created enough flexibility that 
                users could shuffle the cards without bending them. In the figure above, we see two workers on the left using 
                a furnace to fabricate the glue that will bind the three different paper stocks together, while the figure on 
                the right stirs the heated glue in preparation for joining the three layers of paper together.
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 3.jpg" />
            </div>
            <p className="manufacture-caption">
                Image 3. Denis Diderot and Jean le Rond d’Alembert, <i>L’Encyclopédie, ou dictionnaire raisonnée des arts, des 
                sciences, et des métiers</i> (Paris, 1763), vol. 19, 1763, article <i>cartier</i>, Plate 4.
            </p>
            <p>
                Once the glue had been fabricated, it was used to glue the three different types of paper together. The 
                resulting composite card stock was then placed in a press, similar to that in the image above on the left, 
                to facilitate adhesion and flatten the card stock.
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 4.jpg" />
            </div>
            <p className="manufacture-caption">
                Image 4. Detail from Plate 1 of Duhamel du Monceau, <i>Art du cartier</i> (Paris: Saillant & Nyon and Desaint, 1761).
            </p>
            <p>
                The paper stock, once removed from the press, was further prepared by workers who trimmed away excess glue 
                from the sides and used tools to scrape off imperfections on the top and bottom layers of the cards. The 
                sheets were then hung from the rafters, as we see in the image above, in order to dry fully before having 
                the card designs applied to them. The worker labeled as Fig. 6 above prepares to take a pile of completed 
                sheets to the card decorators.
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 5.jpg" />
                <img src="/static/img/manufacture/Image 6.jpg" />
            </div>
            <p className="manufacture-caption">
                Image 5.  Woodblock for printing outlines of face cards. Eighteenth Century, Musée Gadagne, Lyon.
                <br />
                Image 6.  Plate 3, Duhamel du Monceau, <i>Art du cartier</i> (Paris: Saillant & Nyon and Desaint, 1761).
            </p>
            <p>
                Face cards (kings, queens, and jacks) and point cards (ace through ten) were painted onto the card stock 
                using stencils.  Image 5 shows a carved woodblock from the eighteenth century with the face card designs 
                used to create playing cards in the city of Lyon. Card decorators painted five different colors on the 
                face cards: red, yellow, blue, gray, and black. Image 6 shows an outline printed from a wood block in the 
                upper left, then the five different stencils used to illuminate the cards. Each color requires a different 
                stencil; the colors would be applied one at a time, each color being allowed to dry before the application 
                of the next color.
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 7.jpg" />
                <img src="/static/img/manufacture/Image 8.jpg" />
            </div>
            <p className="manufacture-caption">
                Image 7. Detail from Plate 6 of Denis Diderot and Jean le Rond d’Alembert, <i>L’Encyclopédie, ou dictionnaire 
                raisonnée des arts, des sciences, et des métiers</i> (Paris, 1763), vol. 19, 1763, article <i>cartier</i>.
                <br />
                Image 8.  Plate 5, Duhamel du Monceau, <i>Art du cartier</i> (Paris: Saillant & Nyon and Desaint, 1761).
            </p>
            <p>
                The illumination of point cards was simpler, because each card required only one color, either black or red.
                 Image 7 shows the metal punches that card-makers used to prepare stencils to print one of the four suits 
                 (hearts, diamonds, clubs, and spades).  Image 8 shows the resulting stencils created by using these metal 
                 punches that served to illuminate the point cards.
            </p>

            <div className="manufacture-image-1-9-container">
                <img className="manufacture-image-1-9" src="/static/img/manufacture/Image 9.jpg" />
            </div>
            <p className="manufacture-caption">
                Image 9. Denis Diderot and Jean le Rond d’Alembert, <i>L’Encyclopédie, ou dictionnaire raisonnée des arts, 
                des sciences, et des métiers</i> (Paris, 1763), vol. 19, 1763, article <i>cartier</i>, Plate 1.
            </p>
            <p>
                Image 9 shows a single room in which the cards are being painted, given a sheen, cut, and sorted into decks. 
                The individuals labeled as Figures 1 and 2 on the left are applying paint using the stenciling technique 
                described above. Figure 3 is the <i>lisseur</i>, who is applying a sheen to the cards that makes them easier to 
                handle and more pleasing to the touch. Figure 4 uses the large pair of scissors attached to the table to cut 
                the dried, illuminated sheets supplied by Figure 5 into individual cards. Finally on the far right Figure 6 
                sorts the cut cards into individual decks. Figure 7 in the background is working the press used to create the 
                paper stock that serves as the foundation for the cards being created in the front room of the shop.
            </p>
        </div>
        </>
    );
};

export default Manufacture;