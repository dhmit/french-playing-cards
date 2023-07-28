import React from "react";
import { Row, Col, Figure } from 'react-bootstrap';

export const MaterialSubpageItem = ({title, intro, image1, image2, caption1, caption2, text2, text3, span}) => {

    let leftOffset = 0;
    let rightOffset = 0;
    if (span === 4) {
        leftOffset = 1;
        rightOffset = 2;
    } else {
        span = 6;
    }


    return (
        <Row className="mb-3">
            <Col>
                <h3>{title}</h3>
                <p>{intro}</p>
                <Row>
                    <Col xs={12} sm={{span, offset: leftOffset}}>
                        <Figure>
                            <Figure.Image
                                alt="Image alt text"
                                src={image1}
                            />
                            <Figure.Caption>
                                {caption1}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={12} sm={{span, offset: rightOffset}}>
                        <Figure>
                            <Figure.Image
                                alt="Image alt text"
                                src={image2}
                            />
                            <Figure.Caption>
                                {caption2}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
                <p className="mt-3">
                    {text2}
                    <br />
                    {text3}
                </p>
            </Col>
        </Row>
    );
};
export default MaterialSubpageItem;

