import React from "react";
import { useTranslation } from "react-i18next";
import LinkCard from "../LinkCard";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {

    React.useEffect(() => {
        document.title = "Home | French Playing Cards";
    }, []);

    const { t } = useTranslation();

    // Card Data
    const cardData = [
        {
            img: "/static/img/home/history.jpg",
            title: t('home.history.title'),
            subtitle: t('home.history.subtitle'),
            link: "/history",
        },
        {
            img: "/static/img/home/explore.jpg",
            title: t('home.explore.title'),
            subtitle: t('home.explore.subtitle'),
            link: "/explore",
        },
        {
            img: "/static/img/home/play.png",
            title: t('home.games.title'),
            subtitle: t('home.games.subtitle'),
            link: "/games",
        },
        {
            img: "/static/img/home/about.jpg",
            title: t('home.about.title'),
            subtitle: t('home.about.subtitle'),
            link: "/about",
        },
    ];

    return (<Container>
        <h2 className="page-header">{t("home.header")}</h2>
        <Row>
            <Col
                xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}
                id="home-card-grid" className="d-flex flex-wrap justify-content-around">
                {cardData.map((card, index) => (
                    <LinkCard
                        key={index}
                        img={card.img}
                        title={card.title}
                        subtitle={card.subtitle}
                        link={card.link}
                    />
                ))}
            </Col>
            <Col
                xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                <p className="lead">
                    {t('home.blurb.p1')}
                </p>
                <p className="lead">
                    {t('home.blurb.p2')}
                </p>
                <p className="lead">
                    {t('home.blurb.p3')}
                </p>
            </Col>
        </Row>
    </Container>);
};

export default Home;
