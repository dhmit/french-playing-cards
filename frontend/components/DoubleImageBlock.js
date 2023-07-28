import PropTypes from 'prop-types';
import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";

export const DoubleImageBlock = ({ imgSrc1, imgSrc2, captionKey, textKey }) => {
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

export default DoubleImageBlock;
