import React from "react";
import ImagePopup from "../ImagePopup";
import { Trans, useTranslation } from "react-i18next";

const Envelopes = () => {

    React.useEffect(() => {
        document.title = 'Envelopes | French Playing Cards';        
    }, []);

    const { t } = useTranslation();

    return (
    <>
        <h2 className="page-header">{t("material.envelopes.title")}</h2>

        <div className="material-subpage-intro">
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p className="material-subpage-blurb">
            {t("material.envelopes.intro")}
                <br/>
                <br/>
            <Trans i18nKey="material.envelopes.images">
                The card images below and the associated metadata are courtesy of the <a href="https://gallica.bnf.fr/">Gallica</a> site of the Bibilothèque 
                nationale de France.
            </Trans>
            </p>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.envelopes.epinal.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.envelopes.epinal.text")}
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/epinal/Epinal1.JPEG'/>
                    <p>
                    {t("material.envelopes.epinal.left")}
                        <br />
                        <br />
                        Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (B, 43)-BOITE ECU.
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/epinal/Epinal2.JPEG'/>
                    <p>
                        {t("material.envelopes.rightWrapper")} “CLAUDE GERARD.  CARTES FINES FAITE PAR CLAUDE GERARD A ESPINA”. (1650)
                        <br />
                        <br />
                        Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (B, 45)-BOITE ECU.
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.envelopes.rouen.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.envelopes.rouen.text")}
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/rouen/Rouen1.jpg'/>
                    <p>
                    {t("material.envelopes.leftWrapper")} Cartouche: “L’EPINNE ESTANT EN FLEUR SENT UN TRES BON ODEUR.” {t("material.envelopes.bottomLegend")}: “CARTES TRES FINNES DE EDME DE LEPINNE DEMT AU BAS DE LE RUE DES BELLES FEMMES A ROUEN.”
                        <br />
                        <br />
                        Source: Bibliothèque nationale de France, Cabinet des Estampes, PET FOL-KH-34 (A, 32).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/rouen/Rouen2.jpg'/>
                    <p>
                    {t("material.envelopes.rightWrapper")} Cartouche: “DAVID DE SA HARPE LOUE DIEU DE TOUT SON COEUR.”  {t("material.envelopes.bottomLegend")}: “CARTES TRES FINES FAITES PAR ANTO”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (1BIS, 54BIS).
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.envelopes.eighteenth.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.envelopes.eighteenth.text")}
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/eighteenth-century/EighteenthCentury1.JPEG'/>
                    <p>
                    {t("material.envelopes.leftWrapper")} “JE ME DIS LE HEROS DES ROYS ESTANT POURVEU DE CHARGES DES FRANCOIS”. {t("material.envelopes.bottomLegend")} “CARTES TRES FINES FAITES AU HEROS DES ROIS ET CE VEND TOUTES SORTES DE PAPIER FIN ANCRE DOUBLE”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, PET FOL-KH-34 (A, 30).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/eighteenth-century/EighteenthCentury2.JPEG'/>
                    <p>
                    {t("material.envelopes.rightWrapper")} ({t("material.envelopes.bottomLegend")}) “CARTES TRES FINES FAITES PAR FRANCOIS GUILLOT MRE CARTIER A 
                        PARIS DEMEURANT RUE DE SEINE VIS A VIS LA RUE DU COLOMBIER PRES CEL. DE BUSY VAND TOUT CE QUI 
                        CONCERNE LECRITURE A MADAMME LA DAUPHINE”. {t("material.envelopes.eighteenth.right")}
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (1BIS, 54BIS).
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.envelopes.revolutionary.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.envelopes.revolutionary.text")}
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/chassonneris/Chassonneris1.JPEG'/>
                    <p>
                        {t("material.envelopes.revolutionary.left")} “Rue de la Verrerie au coin de la Rue Coquilles, 
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
                        {t("material.envelopes.revolutionary.right")} “AT THE THREE MOORS JEU DE PIQUET” {t("material.envelopes.revolutionary.piquet")}. {t("material.envelopes.bottomLegend")}: “CARTES TRES FINES 
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
        <h3>{t("material.envelopes.shine.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.envelopes.shine.text")}
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/i-shine-for-all/Shine1.JPEG'/>
                    <p>
                        {t("material.envelopes.leftWrapper")} ({t("material.envelopes.bottomLegend")}) “CARTES FINES, Faites par ANT. MANUS, Marchand Cartier, 
                        demeurant Place du Plâtre, maison Tolozan, No 3, du côté de rue Longue, au troisieme, A LYON”
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (1, 21).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/i-shine-for-all/Shine2.JPEG'/>
                    <p>
                    {t("material.envelopes.shine.right")}
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (2, 33).
                    </p>
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.envelopes.napoleonic.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.envelopes.napoleonic.text")} <a href="../material-aspects/fronts">{t("material.envelopes.napoleonic.text2")}</a> {t("material.envelopes.napoleonic.text3")}
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/napoleon/Napoleon1.JPEG'/>
                    <p>
                    {t("material.envelopes.napoleonic.left")}
                        <br />
                        <br />
                        Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (10, 416).
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src='/static/img/materials/envelopes/napoleon/Napoleon2.JPEG'/>
                    <p>
                    {t("material.envelopes.rightWrapper")} “CARTES. FABRIQUE DE CARTES DE LA VE DELATRE RUE HELVETIUS NO 37 A PARIS”
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