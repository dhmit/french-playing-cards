import PropTypes from 'prop-types';
import React from "react";
import { Row, Col, Figure } from "react-bootstrap";
import { Trans } from "react-i18next";

export const ImageBlock = ({ imgSrc, captionKey, text }) => {
    return (
        <>
            <Row className="justify-content-center mt-5">
                <Col xs={12} md={8}>
                    <Figure>
                        <a href={imgSrc} target="_blank" rel="noreferrer">
                            <Figure.Image
                                width="100%"
                                height="auto"
                                src={imgSrc}
                                title="Click to Expand"
                            />
                        </a>
                        <Figure.Caption>
                            <Trans i18nKey={captionKey} />
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={12} md={4}>
                    <p>{text}</p>
                </Col>
            </Row>
        </>
    );
};

ImageBlock.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    captionKey: PropTypes.string.isRequired,
    textKey: PropTypes.string.isRequired,
};
export default ImageBlock;
