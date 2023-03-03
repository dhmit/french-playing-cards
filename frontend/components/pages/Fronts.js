import React from "react";
import ImagePopup from "../ImagePopup";
import { useTranslation } from "react-i18next";

const Fronts = () => {

    React.useEffect(() => {
        document.title = 'Fronts | French Playing Cards';        
    }, []);
    const { t } = useTranslation();

    return (
    <>
        <h2 className="page-header"> {t("material.fronts.full_title")} </h2>

        <div className="material-subpage-intro">
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p className="material-subpage-blurb">
                {t("material.fronts.intro.1")}
                <br/>
                <br/>
                {t("material.fronts.intro.2")} <a href='../iconography'>{t("material.fronts.intro.3")} </a>
                {t("material.fronts.intro.4")}  <a href='../iconography/search'>{t("material.fronts.intro.5")} </a>.
            </p>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.fronts.old_regime.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.fronts.old_regime.1")}
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/old-regime/paris.JPEG'}/>
                    <p>
                    {t("material.fronts.old_regime.2")}
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/old-regime/guyenne.JPEG'}/>
                    <p>
                    {t("material.fronts.old_regime.3")}                   
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/old-regime/dauphine.JPEG'}/>
                    <p>
                    {t("material.fronts.old_regime.4")}  
                    </p> 
                    {/* TODO: make the images all the same height!! */}
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.fronts.french_revolution.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.fronts.french_revolution.1")}
                    <br/>
                    <br/>
                    {t("material.fronts.french_revolution.2")}
                </p>
                <br/>
                <h4>{t("material.fronts.french_revolution.3")}</h4>
                <p>
                {t("material.fronts.french_revolution.4")}
                </p>

                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/revolution/Jaume.Rev.1.JPEG'}/>
                    <p>
                    {t("material.fronts.french_revolution.5")}
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/revolution/Sigogne.Rev.JPEG'}/>

                    <p>
                    {t("material.fronts.french_revolution.6")}                   
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/revolution/Jaume.Rustic.JPEG'}/>
                    <p>
                    {t("material.fronts.french_revolution.7")}    
                    </p> 
                    {/* TODO: make the images all the same height!! */}
                </div>
                <br/>
                </div>
                <br/>
            <p id='SourceFooter'> {t("material.fronts.french_revolution.8")} </p>

            <br/>
            <h4>{t("material.fronts.french_revolution.9")}</h4>
                <p>
                {t("material.fronts.french_revolution.10")}
                </p>

                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/svb-esc-bezu/SVB.1.JPEG'}/>
                    <p>
                    {t("material.fronts.french_revolution.11")}
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/svb-esc-bezu/ESC.1.JPEG'}/>
                    <p>
                    {t("material.fronts.french_revolution.12")}                   
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/svb-esc-bezu/Bezu.1.jpg'}/>
                    <p>
                    {t("material.fronts.french_revolution.13")}   
                    </p> 
                </div>
                <br/>
            </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.fronts.napoleon.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.fronts.napoleon.1")}
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/napoleon/David.JPEG'}/>
                    <p>
                    {t("material.fronts.napoleon.2")}
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/napoleon/Gatteaux.JPEG'}/>
                    <p>
                    {t("material.fronts.napoleon.3")}                    
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/napoleon/Houbigant.jpg'}/>
                    <p>
                    {t("material.fronts.napoleon.4")}   
                    </p> 
                    {/* TODO: make the images all the same height!! */}
                </div>
                </div>
            </div>
        </div>

        <div className='material-subpage-item'>
        <h3>{t("material.fronts.nineteenth_century.title")}</h3>
            <div className='material-subpage-item-contents'>
                <p>
                {t("material.fronts.nineteenth_century.1")}
                </p>
                <div className='material-subpage-item-images'>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/1815-1848/1830.Barricades.JPEG'}/>
                    <p>
                    {t("material.fronts.nineteenth_century.2")}
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/1815-1848/1848.JPEG'}/>
                    <p>
                    {t("material.fronts.nineteenth_century.3")}                    
                    </p>
                </div>
                <div className='material-subpage-item-image-caption'>
                    <ImagePopup src={'/static/img/materials/fronts/1815-1848/Cartomancy.JPEG'}/>
                    <p>
                    {t("material.fronts.nineteenth_century.4")}   
                    </p> 
                    {/* TODO: make the images all the same height!! */}
                </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default Fronts;