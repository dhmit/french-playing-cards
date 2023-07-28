import ImagePopup from "../ImagePopup";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Figure } from 'react-bootstrap';

const Fronts = () => {

    React.useEffect(() => {
        document.title = "Fronts | French Playing Cards";        
    }, []);
    const {t} = useTranslation();

    return (
        <Container>

            <Row className="mb-3">
                <Col>
                    <h2 className="page-header">{t("material.fronts.full_title")}</h2>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col sm={4}>
                    <Figure>
                        <Figure.Image src={"/static/img/misc/mascot.jpg"} />
                    </Figure>
                </Col>
                <Col sm={8}>
                    <p>
                        {t("material.fronts.intro.1")}
                        <br/>
                        <br/>
                        {t("material.fronts.intro.2")} <a href='../iconography'>{t("material.fronts.intro.3")} </a>
                        {t("material.fronts.intro.4")}  <a href='../iconography/search'>{t("material.fronts.intro.5")} </a>.
                    </p>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <h3>{t("material.fronts.old_regime.title")}</h3>
                    <p>{t("material.fronts.old_regime.1")}</p>
                    <Row>
                        <Col xs={12} sm={4}>
                            <Figure>
                                <Figure.Image
                                width={300}
                                height={200}
                                alt="Image alt text"
                                src={"/static/img/materials/fronts/old-regime/paris.JPEG"}
                                onClick={() => <ImagePopup src={"/static/img/materials/fronts/old-regime/paris.JPEG"}/>}
                            />
                                    <Figure.Caption>
                                        {t("material.fronts.old_regime.2")}
                                    </Figure.Caption>
                                </Figure>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Figure>
                                    <Figure.Image
                                    width={300}
                                    height={200}
                                    alt="Image alt text"
                                    src={"/static/img/materials/fronts/old-regime/guyenne.JPEG"}
                                    onClick={() => <ImagePopup src={"/static/img/materials/fronts/old-regime/guyenne.JPEG"}/>}
                                />
                                        <Figure.Caption>
                                            {t("material.fronts.old_regime.3")}
                                        </Figure.Caption>
                                    </Figure>
                                </Col>
                                <Col xs={12} sm={4}>
                                    <Figure>
                                        <Figure.Image
                                        width={300}
                                        height={200}
                                        alt="Image alt text"
                                        src={"/static/img/materials/fronts/old-regime/dauphine.JPEG"}
                                        onClick={() => <ImagePopup src={"/static/img/materials/fronts/old-regime/dauphine.JPEG"}/>}
                                    />
                                            <Figure.Caption>
                                                {t("material.fronts.old_regime.4")}
                                            </Figure.Caption>
                                        </Figure>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>




                        <Row className="mb-3">
                            <Col>
                                <h3>{t("material.fronts.french_revolution.title")}</h3>
                                <p>{t("material.fronts.french_revolution.1")}<br/><br/>{t("material.fronts.french_revolution.2")}</p>

                                <h4>{t("material.fronts.french_revolution.3")}</h4>
                                <p>{t("material.fronts.french_revolution.4")}</p>

                                <Row>
                                    <Col xs={12} sm={4}>
                                        <Figure>
                                            <Figure.Image
                                                width={300} // Set appropriate width for your use case
                                                height={200} // Set appropriate height for your use case
                                                alt="Image alt text"
                                                src={"/static/img/materials/fronts/revolution/Jaume.Rev.1.JPEG"}
                                                onClick={() => <ImagePopup src={"/static/img/materials/fronts/revolution/Jaume.Rev.1.JPEG"}/>}
                                            />
                                                <Figure.Caption>
                                                    {t("material.fronts.french_revolution.5")}
                                                </Figure.Caption>
                                            </Figure>
                                        </Col>
                                        <Col xs={12} sm={4}>
                                            <Figure>
                                                <Figure.Image
                                                    width={300} // Set appropriate width for your use case
                                                    height={200} // Set appropriate height for your use case
                                                    alt="Image alt text"
                                                    src={"/static/img/materials/fronts/revolution/Sigogne.Rev.JPEG"}
                                                    onClick={() => <ImagePopup src={"/static/img/materials/fronts/revolution/Sigogne.Rev.JPEG"}/>}
                                                />
                                                        <Figure.Caption>
                                                            {t("material.fronts.french_revolution.6")}
                                                        </Figure.Caption>
                                                    </Figure>
                                                </Col>
                                            <Col xs={12} sm={4}>
                                                <Figure>
                                                    <Figure.Image
                                                    width={300} // Set appropriate width for your use case
        height={200} // Set appropriate height for your use case
        alt="Image alt text"
                                                    src={"/static/img/materials/fronts/revolution/Jaume.Rustic.JPEG"}
                                                    onClick={() => <ImagePopup src={"/static/img/materials/fronts/revolution/Jaume.Rustic.JPEG"}/>}
                                                />
                                                        <Figure.Caption>
                                                            {t("material.fronts.french_revolution.7")}
                                                        </Figure.Caption>
                                                    </Figure>
                                                </Col>
                                            </Row>

                                            <p id='SourceFooter'>{t("material.fronts.french_revolution.8")}</p>

                                            <h4>{t("material.fronts.french_revolution.9")}</h4>
                                            <p>{t("material.fronts.french_revolution.10")}</p>

                                            <Row>
                                                <Col xs={12} sm={4}>
                                                    <Figure>
                                                        <Figure.Image
                                                        width={300} // Set appropriate width for your use case
                                                        height={200} // Set appropriate height for your use case
                                                        alt="Image alt text"
                                                        src={"/static/img/materials/fronts/svb-esc-bezu/SVB.1.JPEG"}
                                                        onClick={() => <ImagePopup src={"/static/img/materials/fronts/svb-esc-bezu/SVB.1.JPEG"}/>}
                                                    />
                                                            <Figure.Caption>
                                                                {t("material.fronts.french_revolution.11")}
                                                            </Figure.Caption>
                                                        </Figure>
                                                    </Col>
                                                    <Col xs={12} sm={4}>
                                                        <Figure>
                                                            <Figure.Image
                                                            width={300} // Set appropriate width for your use case
        height={200} // Set appropriate height for your use case
        alt="Image alt text"
                                                            src={"/static/img/materials/fronts/svb-esc-bezu/ESC.1.JPEG"}
                                                            onClick={() => <ImagePopup src={"/static/img/materials/fronts/svb-esc-bezu/ESC.1.JPEG"}/>}
                                                        />
                                                                <Figure.Caption>
                                                                    {t("material.fronts.french_revolution.12")}
                                                                </Figure.Caption>
                                                            </Figure>
                                                        </Col>
                                                        <Col xs={12} sm={4}>
                                                            <Figure>
                                                                <Figure.Image
                                                                width={300} // Set appropriate width for your use case
        height={200} // Set appropriate height for your use case
        alt="Image alt text"
                                                                src={"/static/img/materials/fronts/svb-esc-bezu/Bezu.1.jpg"}
                                                                onClick={() => <ImagePopup src={"/static/img/materials/fronts/svb-esc-bezu/Bezu.1.jpg"}/>}
                                                            />
                                                                    <Figure.Caption>
                                                                        {t("material.fronts.french_revolution.13")}
                                                                </Figure.Caption>
                                                            </Figure>
                                                        </Col>
                                                    </Row>
                                                </Col>
    </Row>


<Row className="mb-3">
    <Col>
        <h3>{t("material.fronts.napoleon.title")}</h3>
        <p>{t("material.fronts.napoleon.1")}</p>

        <Row>
            <Col xs={12} sm={4}>
                <Figure>
                    <Figure.Image
                    width={300} // Set appropriate width for your use case
    height={200} // Set appropriate height for your use case
    alt="Image alt text"
                    src={"/static/img/materials/fronts/napoleon/David.JPEG"}
                    onClick={() => <ImagePopup src={"/static/img/materials/fronts/napoleon/David.JPEG"}/>}
                />
                        <Figure.Caption>
                            {t("material.fronts.napoleon.2")}
                        </Figure.Caption>
                    </Figure>
                </Col>
                <Col xs={12} sm={4}>
                    <Figure>
                        <Figure.Image
                        width={300} // Set appropriate width for your use case
    height={200} // Set appropriate height for your use case
    alt="Image alt text"
                        src={"/static/img/materials/fronts/napoleon/Gatteaux.JPEG"}
                        onClick={() => <ImagePopup src={"/static/img/materials/fronts/napoleon/Gatteaux.JPEG"}/>}
                    />
                            <Figure.Caption>
                                {t("material.fronts.napoleon.3")}
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={12} sm={4}>
                        <Figure>
                            <Figure.Image
                            width={300} // Set appropriate width for your use case
    height={200} // Set appropriate height for your use case
    alt="Image alt text"
                            src={"/static/img/materials/fronts/napoleon/Houbigant.jpg"}
                            onClick={() => <ImagePopup src={"/static/img/materials/fronts/napoleon/Houbigant.jpg"}/>}
                        />
                                <Figure.Caption>
                                    {t("material.fronts.napoleon.4")}
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                </Col>
            </Row>


<Row className="mb-3">
  <Col>
    <h3>{t("material.fronts.nineteenth_century.title")}</h3>
    <p>{t("material.fronts.nineteenth_century.1")}</p>

    <Row>
      <Col xs={12} sm={4}>
        <Figure>
          <Figure.Image
            width={300}
            height={200}
            alt="Image alt text"
            src={"/static/img/materials/fronts/1815-1848/1830.Barricades.JPEG"}
            onClick={() => <ImagePopup src={"/static/img/materials/fronts/1815-1848/1830.Barricades.JPEG"} />}
          />
          <Figure.Caption>
            {t("material.fronts.nineteenth_century.2")}
          </Figure.Caption>
        </Figure>
      </Col>
      <Col xs={12} sm={4}>
        <Figure>
          <Figure.Image
            width={300}
            height={200}
            alt="Image alt text"
            src={"/static/img/materials/fronts/1815-1848/1848.JPEG"}
            onClick={() => <ImagePopup src={"/static/img/materials/fronts/1815-1848/1848.JPEG"} />}
          />
          <Figure.Caption>
            {t("material.fronts.nineteenth_century.3")}
          </Figure.Caption>
        </Figure>
      </Col>
      <Col xs={12} sm={4}>
        <Figure>
          <Figure.Image
            width={300}
            height={200}
            alt="Image alt text"
            src={"/static/img/materials/fronts/1815-1848/Cartomancy.JPEG"}
            onClick={() => <ImagePopup src={"/static/img/materials/fronts/1815-1848/Cartomancy.JPEG"} />}
          />
          <Figure.Caption>
            {t("material.fronts.nineteenth_century.4")}
          </Figure.Caption>
        </Figure>
      </Col>
    </Row>
  </Col>
</Row>









        </Container>
    );
};

export default Fronts;
