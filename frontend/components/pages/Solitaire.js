import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Trans, useTranslation } from 'react-i18next';
import LinkCard from "../LinkCard";

const Solitaire = () => {
    const { t } = useTranslation();

    React.useEffect(() => {
        document.title = "Solitaire";
    }, []);

    const cardData = [
        {
            img: "/static/img/games/paris-menu.png",
            title: "Portrait de Paris",
            link: "/solitaire/play/paris"
        },
        {
            img: "/static/img/games/dugourc-menu.png",
            title: "Jaume et Dugourc",
            link: "/solitaire/play/dugourc"
        },
        {
            img: "/static/img/games/david-menu.png",
            title: "J-L David",
            link: "/solitaire/play/david"
        }
    ];

    return (
        <Container className="mt-2">
            <h1>{t('solitaire.title')}</h1>

            <Row className="mb-3">
                <Col>
                    <p>
                        <Trans i18nKey="solitaire.description" components={[
                            <a href="https://gallica.bnf.fr/ark:/12148/btv1b105093722.r=JeuCart?rk=5493589;2"
                               key="0"></a>
                        ]} />
                    </p>
                    <ul>
                        <li>{t('solitaire.faceCardDescription1')}</li>
                        <li>{t('solitaire.faceCardDescription2')}</li>
                        <li>{t('solitaire.faceCardDescription3')}</li>
                    </ul>
                    <p>
                        <Trans i18nKey="solitaire.infoLink" components={[
                            <a href="/material-aspects/fronts" key="0"></a>
                        ]} />
                    </p>
                    <p>
                        <a href={t('solitaire.rulesHref')}>{t('solitaire.rules')}</a>
                    </p>
                </Col>
            </Row>

            <Row className="mb-3">
                    <h2 className="mb-1">{t('solitaire.selectDeck')}</h2>
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

export default Solitaire;
