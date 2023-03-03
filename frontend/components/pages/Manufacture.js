import React from "react";
<<<<<<< HEAD
import { useTranslation } from "react-i18next";
=======
import { Trans, useTranslation } from "react-i18next";
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99

const Manufacture = () => {

    React.useEffect(() => {
        document.title = 'Manufacture | French Playing Cards';        
    }, []);

    const { t } = useTranslation();

    return (
        <>
        <h2 className="page-header"> {t("manufacture.header")} </h2>

        <h3 id="manufacture-header"> {t("manufacture.intro")} </h3>

        <div className="manufacture-content">
            <div className="manufacture-image-1-9-container">
                <img className="manufacture-image-1-9" src="/static/img/manufacture/Image 1.jpg" />
            </div>
            <p className="manufacture-caption">
<<<<<<< HEAD
            { t("manufacture.img_1.1") } <i> {t("manufacture.img_1.2") } </i>
            {t("manufacture.img_1.3") } <i>{t("manufacture.img_1.4") } </i>
            </p>
            <p>
            { t("manufacture.manufacture_1") } 
=======
            <Trans i18nKey="manufacture.1.caption"> 
                Image 1. <i>The Workshop of a Parisian Playing Card Maker</i>, gouache, early 1690s, <i>Musée Carnavalet</i>. 
            </Trans>
            </p>
            <p>
                {t("manufacture.1.text")}
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 2.jpg" />
            </div>
            <p className="manufacture-caption">
<<<<<<< HEAD
            { t("manufacture.img_2.1") } <i> {t("manufacture.img_2.2") } </i>
            {t("manufacture.img_2.3") } 
            </p>
            <p>
            { t("manufacture.manufacture_2") } 
=======
            <Trans i18nKey="manufacture.2.caption"> 
                Image 2. Detail from Plate 1 of Duhamel du Monceau, <i>Art du cartier</i> (Paris: Saillant & Nyon and Desaint, 1761).
            </Trans>
            </p>
            <p>
                {t("manufacture.2.text")}
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 3.jpg" />
            </div>
            <p className="manufacture-caption">
<<<<<<< HEAD
            { t("manufacture.img_3.1") } <i> {t("manufacture.img_3.2") } </i>
            {t("manufacture.img_3.3") } <i>{t("manufacture.img_3.4") } </i> {t("manufacture.img_3.5") }
            </p>
            <p>
                { t("manufacture.manufacture_3") } 
=======
            <Trans i18nKey="manufacture.3.caption"> 
                Image 3. Denis Diderot and Jean le Rond d’Alembert, <i>L’Encyclopédie, ou dictionnaire raisonnée des arts, des 
                sciences, et des métiers</i> (Paris, 1763), vol. 19, 1763, article <i>cartier</i>, Plate 4.
            </Trans>
            </p>
            <p>
            {t("manufacture.3.text")}
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 4.jpg" />
            </div>
            <p className="manufacture-caption">
<<<<<<< HEAD
            { t("manufacture.img_4.1") } <i> {t("manufacture.img_4.2") } </i>
            {t("manufacture.img_4.3") }
            </p>
            <p>
            { t("manufacture.manufacture_4") } 
=======
            <Trans i18nKey="manufacture.4.caption"> 
                Image 4. Detail from Plate 1 of Duhamel du Monceau, <i>Art du cartier</i> (Paris: Saillant & Nyon and Desaint, 1761).
            </Trans>
            </p>
            <p>
            {t("manufacture.4.text")}
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
            </p>

            <div className="manufacture-images-double">
                <img src="/static/img/manufacture/Image 5.jpg" />
                <img src="/static/img/manufacture/Image 6.jpg" />
            </div>
            <p className="manufacture-caption">
<<<<<<< HEAD
            { t("manufacture.img_5.1") } 
                <br />
                { t("manufacture.img_6.1") } <i> {t("manufacture.img_6.2") } </i>
            {t("manufacture.img_6.3") }
            </p>
            <p>
            { t("manufacture.manufacture_5") } 
=======
            <Trans i18nKey="manufacture.5-6.caption"> 
                Image 5.  Woodblock for printing outlines of face cards. Eighteenth Century, Musée Gadagne, Lyon.
                <br />
                Image 6.  Plate 3, Duhamel du Monceau, <i>Art du cartier</i> (Paris: Saillant & Nyon and Desaint, 1761).
            </Trans>
            </p>
            <p>
            {t("manufacture.5-6.text")}
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
            </p>

            <div className="manufacture-images-double">
                <img src="/static/img/manufacture/Image 7.jpg" />
                <img src="/static/img/manufacture/Image 8.jpg" />
            </div>
            <p className="manufacture-caption">
<<<<<<< HEAD
            { t("manufacture.img_7.1") } <i> {t("manufacture.img_7.2") } </i>
            {t("manufacture.img_7.3") } <i>{t("manufacture.img_7.4") } </i>
                <br />
                { t("manufacture.img_8.1") } <i> {t("manufacture.img_8.2") } </i>
            {t("manufacture.img_8.3") }
            </p>
            <p>
            { t("manufacture.manufacture_6") } 
=======
            <Trans i18nKey="manufacture.7-8.caption"> 
                Image 7. Detail from Plate 6 of Denis Diderot and Jean le Rond d’Alembert, <i>L’Encyclopédie, ou dictionnaire 
                raisonnée des arts, des sciences, et des métiers</i> (Paris, 1763), vol. 19, 1763, article <i>cartier</i>.
                <br />
                Image 8.  Plate 5, Duhamel du Monceau, <i>Art du cartier</i> (Paris: Saillant & Nyon and Desaint, 1761).
            </Trans>
            </p>
            <p>
            {t("manufacture.7-8.text")}
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
            </p>

            <div className="manufacture-image-1-9-container">
                <img className="manufacture-image-1-9" src="/static/img/manufacture/Image 9.jpg" />
            </div>
            <p className="manufacture-caption">
<<<<<<< HEAD
            { t("manufacture.img_9.1") } <i> {t("manufacture.img_9.2") } </i>
            {t("manufacture.img_9.3") } <i>{t("manufacture.img_9.4") } </i> {t("manufacture.img_9.5") }
            </p>
            <p>
            { t("manufacture.manufacture_7") } 
=======
            <Trans i18nKey="manufacture.9.caption"> 
                Image 9. Denis Diderot and Jean le Rond d’Alembert, <i>L’Encyclopédie, ou dictionnaire raisonnée des arts, 
                des sciences, et des métiers</i> (Paris, 1763), vol. 19, 1763, article <i>cartier</i>, Plate 1.
            </Trans>
            </p>
            <p>
                <Trans i18nKey="manufacture.9.text"> Image 9 shows a single room in which the cards are being painted, given a sheen, cut, and sorted into decks. 
                The individuals labeled as Figures 1 and 2 on the left are applying paint using the stenciling technique 
                described above. Figure 3 is the <i>lisseur</i>, who is applying a sheen to the cards that makes them easier to 
                handle and more pleasing to the touch. Figure 4 uses the large pair of scissors attached to the table to cut 
                the dried, illuminated sheets supplied by Figure 5 into individual cards. Finally on the far right Figure 6 
                sorts the cut cards into individual decks. Figure 7 in the background is working the press used to create the 
                paper stock that serves as the foundation for the cards being created in the front room of the shop.</Trans>
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
            </p>
        </div>
        </>
    );
};

export default Manufacture;