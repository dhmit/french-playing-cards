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
            img: "/static/img/games/solitaire.png",
            title: t('games.solitaire'),
            link: "/solitaire/select",
        },
        {
            img: "/static/img/games/cartomancy.jpg",
            title: t('games.cartomancy'),
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
