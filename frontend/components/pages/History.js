import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap';
import LinkCard from "../LinkCard";

const History = () => {

    React.useEffect(() => {
        document.title = "History | French Playing Cards";
    }, []);

    const { t } = useTranslation();

    const cardData = [
        {
            img: "/static/img/history/manufacture.jpg",
            title: t('history.manufacture.title'),
            subtitle: t('history.manufacture.subtitle'),
            link: "/manufacture",
        },
        {
            img: "/static/img/history/material-aspects.jpg",
            title: t('history.material.title'),
            subtitle: t('history.material.subtitle'),
            link: "/material-aspects",
        },
        {
            img: "/static/img/history/iconography.jpg",
            title: t('history.iconography.title'),
            subtitle: t('history.iconography.subtitle'),
            link: "/iconography",
        },
        {
            img: "/static/img/history/tarot.jpg",
            title: t('history.tarot.title'),
            subtitle: t('history.tarot.subtitle'),
            link: "/tarot",
        },
        {
            img: "/static/img/history/bibliography.jpg",
            title: t('history.bibliography.title'),
            subtitle: t('history.bibliography.subtitle'),
            link: "/bibliography",
        },
    ];

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2 className="page-header">{t("history.header")}</h2>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col sm={12}>
                    <p>{t("history.intro")}</p>
                </Col>
            </Row>

            <Row className="mb-3">
                {cardData.map((card, index) => (
                    <Col sm={4} key={index}>
                        <LinkCard
                            img={card.img}
                            title={card.title}
                            subtitle={card.subtitle}
                            link={card.link} 
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default History;
