import React from "react";
import {Trans, useTranslation} from "react-i18next";
import { Container, Col, Row, Figure }  from 'react-bootstrap';
import Breadcrumbs from '../Breadcrumbs';
import MaterialSubpageItem from "../MaterialSubpageItem";


const Backs = () => {

    React.useEffect(() => {
        document.title = "Backs | French Playing Cards";        
    }, []);
    const {t} = useTranslation();

    return (
        <Container>
            <Breadcrumbs crumbs={[
                {name: 'History', path: '/history'},
                {name: 'Material Aspects', path: '/material-aspects'},
                {name: 'Backs', path: ''},
            ]} />
            <Row className="mb-3">
                <Col>
                    <h2 className="page-header">{t("material.backs.full_title")}</h2>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={3}>
                    <Figure>
                        <Figure.Image src={"/static/img/misc/mascot.jpg"} />
                    </Figure>
                </Col>
                <Col md={6}>
                    <p id="back-text" className="material-subpage-blurb">
                        {t("material.backs.introa")} <i>{t("material.backs.introb")}</i>{t("material.backs.introc")}
                    </p>
                </Col>
                <Col md={3}>
                    <Figure>
                        <Figure.Image src={"/static/img/materials/materialsBacks.jpeg"} />
                    </Figure>
                </Col>
            </Row>


            <MaterialSubpageItem 
                title={t("material.backs.catalogue.title")}
                intro={t("material.backs.catalogue.1")}
                image1="/static/img/materials/backs/library-card-catalogue/Loudun.JPEG"
                image2="/static/img/materials/backs/library-card-catalogue/Loudon-front.JPEG"
                caption1="Back Side"
                caption2="Front Side"
                text2={t("material.backs.catalogue.2")}
                text3={t("material.backs.catalogue.3")}
                span={4}
            />

            <MaterialSubpageItem 
                title={t("material.backs.legal.title")}
                intro={t("material.backs.legal.1")}
                image1="/static/img/materials/backs/legal-case/legal-case.jpg"
                image2="/static/img/materials/backs/legal-case/Legal case front.JPEG"
                caption1="Back Side"
                caption2="Front Side"
                text2={t("material.backs.legal.2")}
                text3={t("material.backs.legal.3")}
                span={4}
            />

            <MaterialSubpageItem 
                title={t("material.backs.money.title")}
                intro={<Trans i18nKey="material.backs.money.text">During the French Revolution, the government printed <i>billets de confiance</i>, or small denomination bills, on the backs of used playing cards to supplement the printed bills known as <i>assignats</i></Trans>}
                image1="/static/img/materials/backs/money/money.JPEG"
                image2="/static/img/materials/backs/money/Money front.JPEG"
                caption1="Back Side"
                caption2="Front Side"
                text2={t("material.backs.money.2")}
                text3={t("material.backs.money.3")}
                span={4}
            />


            <MaterialSubpageItem 
                title={t("material.backs.meat.title")}
                intro={t("material.backs.meat.1")}
                image1="/static/img/materials/backs/meat-ration/ration.JPEG"
                image2="/static/img/materials/backs/meat-ration/ration-front.JPEG"
                caption1="Back Side"
                caption2="Front Side"
                text2={t("material.backs.meat.2")}
                text3={t("material.backs.meat.3")}
                span={4}
            />

            <MaterialSubpageItem 
                title={t("material.backs.business_cards.title")}
                intro={t("material.backs.business_cards.1")}
                image1="/static/img/materials/backs/business-cards/Business.JPEG"
                image2="/static/img/materials/backs/business-cards/business front.JPEG"
                caption1="Back Side"
                caption2="Front Side"
                text2={t("material.backs.business_cards.2")}
                text3={t("material.backs.business_cards.3")}
                span={4}
            />

            <MaterialSubpageItem 
                title={t("material.backs.flash_cards.title")}
                intro={t("material.backs.flash_cards.1")}
                image1="/static/img/materials/backs/flash-cards/flash card.jpg"
                image2="/static/img/materials/backs/flash-cards/flash card front.JPEG"
                caption1="Back Side"
                caption2="Front Side"
                text2={t("material.backs.flash_cards.2")}
                text3={t("material.backs.flash_cards.3")}
                span={4}
            />

            <MaterialSubpageItem 
                title={t("material.backs.call_response.title")}
                intro={t("material.backs.call_response.1")}
                image1="/static/img/materials/backs/call-and-response/89-99 Bezu.JPEG"
                image2="/static/img/materials/backs/call-and-response/Bezu front.JPEG"
                caption1="Back Side"
                caption2="Front Side"
                text2={t("material.backs.call_response.2")}
                text3={t("material.backs.call_response.3")}
                span={4}
            />

            <MaterialSubpageItem 
                title={t("material.backs.pastoral_drawing.title")}
                intro={t("material.backs.pastoral_drawing.1")}
                image1="/static/img/materials/backs/pastoral-drawing/Pastoral Drawing.jpg"
                image2="/static/img/materials/backs/pastoral-drawing/Pastoral front.jpg"
                caption1="Back Side"
                caption2="Front Side"
                text2={t("material.backs.pastoral_drawing.2")}
                span={4}
            />



        </Container>
    );
};

export default Backs;
