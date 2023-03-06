import React from "react";
import ImageHover from "../ImageHover";
import { Trans, useTranslation } from "react-i18next";

const Backs = () => {

    React.useEffect(() => {
        document.title = 'Backs | French Playing Cards';        
    }, []);
    const { t } = useTranslation();

    return (
    <>
        <h2 className="page-header"> {t("material.backs.full_title")} </h2>

        <div className="material-subpage-intro">
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p id="back-text" className="material-subpage-blurb">
            {t("material.backs.introa")} <i> {t("material.backs.introb")} </i>{t("material.backs.introc")} 
            </p>
            <img id="back-intro" src={'/static/img/materials/materialsBacks.jpeg'}/>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.backs.catalogue.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.backs.catalogue.1")} 
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/library-card-catalogue/Loudun.JPEG" src2="/static/img/materials/backs/library-card-catalogue/Loudon-front.JPEG"/>
                    </div>
                </div>
                <p className="back-caption">
                {t("material.backs.catalogue.2")} 
                    <br />
                    {t("material.backs.catalogue.3")} 
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.backs.legal.title")} </h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.backs.legal.1")}
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/legal-case/legal-case.jpg" src2="/static/img/materials/backs/legal-case/Legal case front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                    {t("material.backs.legal.2")}
                    <br />
                    {t("material.backs.legal.3")}
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.backs.money.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                <Trans i18nKey="material.backs.money.text">
                    During the French Revolution, the government printed <i>billets de confiance</i>, or small denomination bills, on the backs of used playing cards to supplement the printed bills known as <i>assignats</i>
                </Trans>
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/money/money.JPEG" src2="/static/img/materials/backs/money/Money front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                {t("material.backs.money.2")}
                    <br />
                    {t("material.backs.money.3")}
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.backs.meat.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.backs.meat.1")}
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/meat-ration/ration.JPEG" src2="/static/img/materials/backs/meat-ration/ration-front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                    {t("material.backs.meat.2")}
                    <br />
                    {t("material.backs.meat.3")}
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.backs.business_cards.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.backs.business_cards.1")}
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/business-cards/Business.JPEG" src2="/static/img/materials/backs/business-cards/business front.JPEG"/>
                    </div>
                </div>
                <p className="back-caption">
                {t("material.backs.business_cards.2")}
                    <br />
                    {t("material.backs.business_cards.3")}
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.backs.flash_cards.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.backs.flash_cards.1")}
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/flash-cards/flash card.jpg" src2="/static/img/materials/backs/flash-cards/flash card front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                    {t("material.backs.flash_cards.2")}
                    <br />
                    {t("material.backs.flash_cards.3")}
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.backs.call_response.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.backs.call_response.1")}
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/call-and-response/89-99 Bezu.JPEG" src2="/static/img/materials/backs/call-and-response/Bezu front.JPEG" />
                    </div>
                </div>
                <p className="back-caption">
                {t("material.backs.call_response.2")}
                    <br />
                    {t("material.backs.call_response.3")}
                </p>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.backs.pastoral_drawing.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.backs.pastoral_drawing.1")}
                </p>
                <div className='material-subpage-item-images'>
                    <div className='material-subpage-item-image-caption'>
                        <ImageHover src1="/static/img/materials/backs/pastoral-drawing/Pastoral Drawing.jpg" src2="/static/img/materials/backs/pastoral-drawing/Pastoral front.jpg" />
                    </div>
                </div>
                <p className="back-caption">
                {t("material.backs.pastoral_drawing.2")}
                </p>
            </div>
        </div>
    </>
    );
};

export default Backs;