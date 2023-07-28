import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap';
import LinkCard from "../LinkCard";

const Material = () => {

    React.useEffect(() => {
        document.title = "Material Aspects | French Playing Cards";
    }, []);

    const { t } = useTranslation();

    const cardData = [
        {
            img: "/static/img/materials/materialsFronts.jpeg",
            title: t('material.fronts.title'),
            link: "/material-aspects/fronts",
        },
        {
            img: "/static/img/materials/materialsBacks.jpeg",
            title: t('material.backs.title'),
            link: "/material-aspects/backs",
        },
        {
            img: "/static/img/materials/materialsEnvelopes.jpeg",
            title: t('material.envelopes.title'),
            link: "/material-aspects/envelopes",
        },
    ];

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2 className="page-header">{t("material.header")}</h2>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col sm={12}>
                    <p>{t("material.material_1")}</p>
                </Col>
            </Row>

            <Row className="mb-3">
                {cardData.map((card, index) => (
                    <Col sm={4} key={index}>
                        <LinkCard
                            img={card.img}
                            title={card.title}
                            link={card.link}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Material;
