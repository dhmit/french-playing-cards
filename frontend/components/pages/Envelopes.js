import React from "react";
import {Trans, useTranslation} from "react-i18next";
import { Row, Col, Figure, Container } from 'react-bootstrap';
import MaterialSubpageItem from "../MaterialSubpageItem";

const Envelopes = () => {

    React.useEffect(() => {
        document.title = "Envelopes | French Playing Cards";        
    }, []);

    const {t} = useTranslation();

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2 className="page-header">{t("material.envelopes.title")}</h2>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col sm={4}>
                    <Figure>
                        <Figure.Image src={"/static/img/misc/mascot.jpg"} />
                    </Figure>
                </Col>
                <Col sm={8}>
                    <p>
                        {t("material.envelopes.intro")}
                        <br/>
                        <br/>
                        <Trans i18nKey="material.envelopes.images">
                            The card images below and the associated metadata are courtesy of the <a href="https://gallica.bnf.fr/">Gallica</a> site of the Bibilothèque 
                            nationale de France.
                        </Trans>
                    </p>
                </Col>
            </Row>

            <MaterialSubpageItem 
                title={t("material.envelopes.epinal.title")}
                intro={t("material.envelopes.epinal.text")}
                image1='/static/img/materials/envelopes/epinal/Epinal1.JPEG'
                image2='/static/img/materials/envelopes/epinal/Epinal2.JPEG'
                caption1={t("material.envelopes.epinal.left") + '\n' + 'Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (B, 43)-BOITE ECU.'}
                caption2={t("material.envelopes.rightWrapper") + ' “CLAUDE GERARD.  CARTES FINES FAITE PAR CLAUDE GERARD A ESPINA”. (1650)\n' + 'Source: Bibliothèque nationale de France, Cabinet des Estampes, RESERVE KH-34 (B, 45)-BOITE ECU.'}
            />

            <MaterialSubpageItem 
                title={t("material.envelopes.rouen.title")}
                intro={t("material.envelopes.rouen.text")}
                image1='/static/img/materials/envelopes/rouen/Rouen1.jpg'
                image2='/static/img/materials/envelopes/rouen/Rouen2.jpg'
                caption1={t("material.envelopes.leftWrapper") + ' Cartouche: “L’EPINNE ESTANT EN FLEUR SENT UN TRES BON ODEUR.” ' + t("material.envelopes.bottomLegend") + ': “CARTES TRES FINNES DE EDME DE LEPINNE DEMT AU BAS DE LE RUE DES BELLES FEMMES A ROUEN.”\n' + 'Source: Bibliothèque nationale de France, Cabinet des Estampes, PET FOL-KH-34 (A, 32).'}
                caption2={t("material.envelopes.rightWrapper") + ' Cartouche: “DAVID DE SA HARPE LOUE DIEU DE TOUT SON COEUR.”  ' + t("material.envelopes.bottomLegend") + ': “CARTES TRES FINES FAITES PAR ANTO”\n' + 'Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (1BIS, 54BIS).'}
            />

            <MaterialSubpageItem 
                title={t("material.envelopes.eighteenth.title")}
                intro={t("material.envelopes.eighteenth.text")}
                image1='/static/img/materials/envelopes/eighteenth-century/EighteenthCentury1.JPEG'
                image2='/static/img/materials/envelopes/eighteenth-century/EighteenthCentury2.JPEG'
                caption1={t("material.envelopes.leftWrapper") + ' “JE ME DIS LE HEROS DES ROYS ESTANT POURVEU DE CHARGES DES FRANCOIS”. ' + t("material.envelopes.bottomLegend") + ' “CARTES TRES FINES FAITES AU HEROS DES ROIS ET CE VEND TOUTES SORTES DE PAPIER FIN ANCRE DOUBLE”\n' + 'Source:  Bibliothèque nationale de France, Cabinet des Estampes, PET FOL-KH-34 (A, 30).'}
                caption2={t("material.envelopes.rightWrapper") + ' (' + t("material.envelopes.bottomLegend") + ') “CARTES TRES FINES FAITES PAR FRANCOIS GUILLOT MRE CARTIER A \nPARIS DEMEURANT RUE DE SEINE VIS A VIS LA RUE DU COLOMBIER PRES CEL. DE BUSY VAND TOUT CE QUI \nCONCERNE LECRITURE A MADAMME LA DAUPHINE”. ' + t("material.envelopes.eighteenth.right") + '\n' + 'Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (1BIS, 54BIS).'}
            />

            <MaterialSubpageItem 
                title={t("material.envelopes.revolutionary.title")}
                intro={t("material.envelopes.revolutionary.text")}
                image1='/static/img/materials/envelopes/chassonneris/Chassonneris1.JPEG'
                image2='/static/img/materials/envelopes/chassonneris/Chassonneris2.JPEG'
                caption1={t("material.envelopes.revolutionary.left") + '\n' + 'Source:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (5BIS, 162B).'}
                caption2={t("material.envelopes.revolutionary.right") + ' “AT THE THREE MOORS JEU DE PIQUET” ' + t("material.envelopes.revolutionary.piquet") + '. ' + t("material.envelopes.bottomLegend") + ': “CARTES TRES FINES \nFAITES PAR LE CITOYEN CHASSONNERIS MD CARTIER PAPETIER, RUE DE LA VERRERIE VIS A VIS LA RUE COQUILLES \nVEND TOUT CE QUI CONCERNE L’ECRITURE ET FAIT”\n' + 'Source:  Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (4, 112).'}
            />

            <MaterialSubpageItem
                title={t("material.envelopes.shine.title")}
                intro={t("material.envelopes.shine.text")}
                image1='/static/img/materials/envelopes/i-shine-for-all/Shine1.JPEG'
                image2='/static/img/materials/envelopes/i-shine-for-all/Shine2.JPEG'
                caption1={`${t("material.envelopes.leftWrapper")} (${t("material.envelopes.bottomLegend")}) “CARTES FINES, Faites par ANT. MANUS, Marchand Cartier, demeurant Place du Plâtre, maison Tolozan, No 3, du côté de rue Longue, au troisieme, A LYON”\n\nSource:  Bibliothèque nationale de France, Cabinet des Estampes, BOITE FOL-KH-383 (1, 21).`}
                caption2={`${t("material.envelopes.shine.right")}\n\nSource:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE FOL-KH-381 (2, 33).`}
            />

            <MaterialSubpageItem
                title={t("material.envelopes.napoleonic.title")}
                intro={`${t("material.envelopes.napoleonic.text")} <a href="../material-aspects/fronts">{t("material.envelopes.napoleonic.text2")}</a> ${t("material.envelopes.napoleonic.text3")}`}
                image1='/static/img/materials/envelopes/napoleon/Napoleon1.JPEG'
                image2='/static/img/materials/envelopes/napoleon/Napoleon2.JPEG'
                caption1={`${t("material.envelopes.napoleonic.left")}\n\nSource:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (10, 416).`}
                caption2={`${t("material.envelopes.rightWrapper")} “CARTES. FABRIQUE DE CARTES DE LA VE DELATRE RUE HELVETIUS NO 37 A PARIS”\n\nSource:  Bibliothèque nationale de France, Cabinet des Estampes, RESERVE BOITE ECU-KH-167 (5BIS, 159).`}
            />

        </Container>
    );
};

export default Envelopes;
