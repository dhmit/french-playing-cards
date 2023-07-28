import PropTypes from 'prop-types';
import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

export const ImageBlock = ({ imgSrc, captionKey, textKey }) => {
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
export default ImageBlock;
