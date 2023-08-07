import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import LinkCard from "../LinkCard";

const Solitaire = () => {
    React.useEffect(() => {
        document.title = "Solitaire";
    }, []);

    const cardData = [
        {
            img: "/static/img/games/paris-menu.PNG",
            title: "Portrait de Paris",
            link: "/solitaire/play/paris"
        },
        {
            img: "/static/img/games/dugourc-menu.PNG",
            title: "Jaume et Dugourc",
            link: "/solitaire/play/dugourc"
        },
        {
            img: "/static/img/games/david-menu.PNG",
            title: "J-L David",
            link: "/solitaire/play/david"
        }
    ];

    return (
        <Container className="mt-2">
            <Row className="mb-3">
                <Col>
                    <h1>Solitaire</h1>
                    <p>Please select a deck</p>
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

export default Solitaire;
