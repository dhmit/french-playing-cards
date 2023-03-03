import React from "react";
import { useTranslation } from "react-i18next";

const Manufacture = () => {

    React.useEffect(() => {
        document.title = 'Manufacture | French Playing Cards';        
    }, []);

    const { t } = useTranslation();

    return (
        <>
        <h2 className="page-header"> Manufacture </h2>

        <h3 id="manufacture-header"> Manufacturing Playing Cards in France Before 1800 </h3>

        <div className="manufacture-content">
            <div className="manufacture-image-1-9-container">
                <img className="manufacture-image-1-9" src="/static/img/manufacture/Image 1.jpg" />
            </div>
            <p className="manufacture-caption">
            { t("manufacture.img_1.1") } <i> {t("manufacture.img_1.2") } </i>
            {t("manufacture.img_1.3") } <i>{t("manufacture.img_1.4") } </i>
            </p>
            <p>
            { t("manufacture.manufacture_1") } 
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 2.jpg" />
            </div>
            <p className="manufacture-caption">
            { t("manufacture.img_2.1") } <i> {t("manufacture.img_2.2") } </i>
            {t("manufacture.img_2.3") } 
            </p>
            <p>
            { t("manufacture.manufacture_2") } 
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 3.jpg" />
            </div>
            <p className="manufacture-caption">
            { t("manufacture.img_3.1") } <i> {t("manufacture.img_3.2") } </i>
            {t("manufacture.img_3.3") } <i>{t("manufacture.img_3.4") } </i> {t("manufacture.img_3.5") }
            </p>
            <p>
                { t("manufacture.manufacture_3") } 
            </p>

            <div className="manufacture-images">
                <img src="/static/img/manufacture/Image 4.jpg" />
            </div>
            <p className="manufacture-caption">
            { t("manufacture.img_4.1") } <i> {t("manufacture.img_4.2") } </i>
            {t("manufacture.img_4.3") }
            </p>
            <p>
            { t("manufacture.manufacture_4") } 
            </p>

            <div className="manufacture-images-double">
                <img src="/static/img/manufacture/Image 5.jpg" />
                <img src="/static/img/manufacture/Image 6.jpg" />
            </div>
            <p className="manufacture-caption">
            { t("manufacture.img_5.1") } 
                <br />
                { t("manufacture.img_6.1") } <i> {t("manufacture.img_6.2") } </i>
            {t("manufacture.img_6.3") }
            </p>
            <p>
            { t("manufacture.manufacture_5") } 
            </p>

            <div className="manufacture-images-double">
                <img src="/static/img/manufacture/Image 7.jpg" />
                <img src="/static/img/manufacture/Image 8.jpg" />
            </div>
            <p className="manufacture-caption">
            { t("manufacture.img_7.1") } <i> {t("manufacture.img_7.2") } </i>
            {t("manufacture.img_7.3") } <i>{t("manufacture.img_7.4") } </i>
                <br />
                { t("manufacture.img_8.1") } <i> {t("manufacture.img_8.2") } </i>
            {t("manufacture.img_8.3") }
            </p>
            <p>
            { t("manufacture.manufacture_6") } 
            </p>

            <div className="manufacture-image-1-9-container">
                <img className="manufacture-image-1-9" src="/static/img/manufacture/Image 9.jpg" />
            </div>
            <p className="manufacture-caption">
            { t("manufacture.img_9.1") } <i> {t("manufacture.img_9.2") } </i>
            {t("manufacture.img_9.3") } <i>{t("manufacture.img_9.4") } </i> {t("manufacture.img_9.5") }
            </p>
            <p>
            { t("manufacture.manufacture_7") } 
            </p>
        </div>
        </>
    );
};

export default Manufacture;