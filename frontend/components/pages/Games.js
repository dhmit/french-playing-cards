import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from 'react-bootstrap';
import LinkCard from "../LinkCard";

const Games = () => {

    React.useEffect(() => {
        document.title = "Play Games! | French Playing Cards";
    }, []);

    const { t } = useTranslation();

    const cardData = [
        {
            img: "/static/img/games/solitaire.jpg",
            title: t('games.solitaire.title'),
            subtitle: t('games.solitaire.subtitle'),
            link: "/solitaire",
        },
        {
            img: "/static/img/games/divination.jpg",
            title: t('games.divination.title'),
            subtitle: t('games.divination.subtitle'),
            link: "/divination",
        },
    ];

    return (
        <Container>
            <Row className="mb-3">
                <Col>
                    <h2 className="page-header">{t("games.header")}</h2>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col sm={12}>
                    <p>{t("games.play")}</p>
                </Col>
            </Row>

            <Row className="mb-3">
                {cardData.map((card, index) => (
                    <Col sm={6} key={index}>
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

export default Games;
