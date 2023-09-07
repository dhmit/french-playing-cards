import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Trans, useTranslation } from "react-i18next";
import { ImageBlock } from '../ImageBlock';
import { DoubleImageBlock } from '../DoubleImageBlock';

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
                text={t("manufacture.1.text")}
            />

            <ImageBlock
                imgSrc="/static/img/manufacture/Image 2.jpg"
                captionKey="manufacture.2.caption"
                text={t("manufacture.2.text")}
            />

            <ImageBlock
                imgSrc="/static/img/manufacture/Image 3.jpg"
                captionKey="manufacture.3.caption"
                text={t("manufacture.3.text")}
            />

            <ImageBlock
                imgSrc="/static/img/manufacture/Image 4.jpg"
                captionKey="manufacture.4.caption"
                text={t("manufacture.4.text")}
            />

            <DoubleImageBlock
                imgSrc1="/static/img/manufacture/Image 5.jpg"
                imgSrc2="/static/img/manufacture/Image 6.jpg"
                captionKey="manufacture.5-6.caption"
                text={t("manufacture.5-6.text")}
            />

            <DoubleImageBlock
                imgSrc1="/static/img/manufacture/Image 7.jpg"
                imgSrc2="/static/img/manufacture/Image 8.jpg"
                captionKey="manufacture.7-8.caption"
                text={t("manufacture.7-8.text")}
            />

            <ImageBlock
                imgSrc="/static/img/manufacture/Image 9.jpg"
                captionKey="manufacture.9.caption"
                text={<Trans i18nKey="manufacture.9.text" />}
            />
        </Container>
    );
};

export default Manufacture;
