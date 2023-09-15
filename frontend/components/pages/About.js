
import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import {ListGroup, Row, Col} from 'react-bootstrap';

const About = () => {
    React.useEffect(() => {
        document.title = "About | French Playing Cards";
    }, []);

    const {t} = useTranslation();

    return (
        <>
            <h2 className="page-header">{t("about.header")}</h2>

            <Row className="my-3">
                <Col md={4}>
                    <img src={"/static/img/misc/mascot.jpg"} alt="mascot" className="img-fluid"/>
                </Col>
                <Col md={8}>
                        <p>
                            {t("about.intro.1")}
                            <br/>
                            <br/>
                                <Trans i18nKey="about.intro.2" components={[
                                    <a key="0" href="https://history.mit.edu/people/jeffrey-s-ravel/" />,
                                    <a key="1" href="https://www.bnf.fr/en/bibliotheque-nationale-de-france-catalogue-general" />,
                                    <a key="2" href="https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop" />,
                                    <a key="3" href="https://digitalhumanities.mit.edu/" />,
                                    <a key="4" href="https://www.performantsoftware.com" />
                                ]}>
                                </Trans>
                        </p>
                </Col>
            </Row>

            <h3 className="my-3">{t("about.profiles.editor")}</h3>
            <ListGroup>
                <ListGroup.Item>{t("about.professor")} Jeffrey Ravel</ListGroup.Item>
            </ListGroup>

            <h3 className="my-3">{t("about.profiles.tarot_consultant")}</h3>
            <ListGroup>
                <ListGroup.Item>{t("about.professor")} Michael Lynn</ListGroup.Item>
            </ListGroup>

            <h3 className="my-3">{t("about.profiles.team")}</h3>
            <ListGroup>
                <ListGroup.Item>Rhea Bhattacharjee</ListGroup.Item>
                <ListGroup.Item>Alyssa Choi</ListGroup.Item>
                <ListGroup.Item>Paula D. Contreras Nino</ListGroup.Item>
                <ListGroup.Item>Nyana Wright</ListGroup.Item>
                <ListGroup.Item>Xuefei Yu</ListGroup.Item>
                <ListGroup.Item>Ryaan Ahmed - {t("about.dh_director")}</ListGroup.Item>
            </ListGroup>

            <h3 className="my-3">{t("about.profiles.translation")}</h3>
            <ListGroup>
                <ListGroup.Item>Marie Prunières</ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default About;
