
import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import {ListGroup, Card, Row, Col} from 'react-bootstrap';

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
                    <Card className="p-3">
                        <p>
                            {t("about.intro.1")}
                            <br/>
                            <br/>
                            <Trans i18nKey="about.intro.2">
                                This web site is one outcome of a larger project by <a href="https://history.mit.edu/people/jeffrey-s-ravel/">Jeffrey Ravel</a>, 
                                Professor of History at MIT, to write this history.  At a later date, we hope to add a feature that will allow users to play popular Old Regime and Revolutionary card games online, selecting the historical deck with which they will play.
                            </Trans>
                            <br/>
                            <br/>
                            <Trans i18nKey="about.intro.3">
                                Professor Ravel and his team wish to thank the <a href="https://www.bnf.fr/en/bibliotheque-nationale-de-france-catalogue-general">Bibliothèque nationale de France</a> (BnF), 
                                which has provided the digital versions of playing cards and the metadata we make available on our site. Users are 
                                invited to explore the extensive digital reproductions of playing cards in the collections of the BnF, which the 
                                Library makes available on its <a href="https://gallica.bnf.fr/accueil/en/content/accueil-en?mode=desktop">Gallica web site</a>. We are also grateful to 
                                the <a href="https://digitalhumanities.mit.edu/">MIT Programs in the Digital Humanities</a> and <a href="https://www.performantsoftware.com">Performant Software</a> for technical support.
                            </Trans>
                        </p>
                    </Card>
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
                <ListGroup.Item>David Chaudari</ListGroup.Item>
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
