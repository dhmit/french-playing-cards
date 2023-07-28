import PropTypes from 'prop-types';
import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

const ImageBlock = ({ imgSrc, captionKey, textKey }) => {
    const { t } = useTranslation();

    return (
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={8}>
                <Figure>
                    <Figure.Image
                        width="100%"
                        height="auto"
                        src={imgSrc}
                    />
                    <Figure.Caption>
                        <Trans i18nKey={captionKey} />
                    </Figure.Caption>
                </Figure>
            </Col>
            <Col xs={12} md={4}>
                <p>{t(textKey)}</p>
            </Col>
        </Row>
    );
};
ImageBlock.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    captionKey: PropTypes.string.isRequired,
    textKey: PropTypes.string.isRequired,
};

const DoubleImageBlock = ({ imgSrc1, imgSrc2, captionKey, textKey }) => {
    const { t } = useTranslation();

    return (
        <Row className="justify-content-center mt-5">
            <Col xs={12} md={4}>
                <Figure>
                    <Figure.Image
                        width="100%"
                        height="auto"
                        src={imgSrc1}
                    />
                </Figure>
            </Col>
            <Col xs={12} md={4}>
                <Figure>
                    <Figure.Image
                        width="100%"
                        height="auto"
                        src={imgSrc2}
                    />
                </Figure>
            </Col>
            <Col xs={12} md={4}>
                <Figure.Caption>
                    <Trans i18nKey={captionKey} />
                </Figure.Caption>
                <p className="mt-4">{t(textKey)}</p>
            </Col>
        </Row>
    );
};
DoubleImageBlock.propTypes = {
    imgSrc1: PropTypes.string.isRequired,
    imgSrc2: PropTypes.string.isRequired,
    captionKey: PropTypes.string.isRequired,
    textKey: PropTypes.string.isRequired,
};

const Manufacture = () => {
    React.useEffect(() => {
        document.title = "Manufacture | French Playing Cards";
    }, []);

    const { t } = useTranslation();

    return (
        <Container>
            <Row className="mt-5">
                <Col>
                    <h2 className="page-header">{t("manufacture.header")}</h2>
                </Col>
            </Row>

            <Row className="mt-5">
                <Col className="text-center">
                    <h3>{t("manufacture.intro")}</h3>
                </Col>
            </Row>

            <ImageBlock 
                imgSrc="/static/img/manufacture/Image 1.jpg"
                captionKey="manufacture.1.caption"
                textKey="manufacture.1.text"
            />

            <ImageBlock 
                imgSrc="/static/img/manufacture/Image 2.jpg"
                captionKey="manufacture.2.caption"
                textKey="manufacture.2.text"
            />

            <ImageBlock 
                imgSrc="/static/img/manufacture/Image 3.jpg"
                captionKey="manufacture.3.caption"
                textKey="manufacture.3.text"
            />

            <ImageBlock 
                imgSrc="/static/img/manufacture/Image 4.jpg"
                captionKey="manufacture.4.caption"
                textKey="manufacture.4.text"
            />

            <DoubleImageBlock 
                imgSrc1="/static/img/manufacture/Image 5.jpg"
                imgSrc2="/static/img/manufacture/Image 6.jpg"
                captionKey="manufacture.5-6.caption"
                textKey="manufacture.5-6.text"
            />

            <DoubleImageBlock 
                imgSrc1="/static/img/manufacture/Image 7.jpg"
                imgSrc2="/static/img/manufacture/Image 8.jpg"
                captionKey="manufacture.7-8.caption"
                textKey="manufacture.7-8.text"
            />

            <ImageBlock 
                imgSrc="/static/img/manufacture/Image 9.jpg"
                captionKey="manufacture.9.caption"
                textKey="manufacture.9.text"
            />
        </Container>
    );
};

export default Manufacture;
