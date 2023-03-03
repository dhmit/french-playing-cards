import React from "react";
import { useTranslation } from "react-i18next";

const Material = () => {

    React.useEffect(() => {
        document.title = 'Material Aspects | French Playing Cards';        
    }, []);
    const { t } = useTranslation();

    const { t } = useTranslation();

    return (
    <>
        <h2 className="page-header">{t("material.header")}</h2>

        <div className="material-subpage-intro">
            <img src={'/static/img/misc/mascot.jpg'}/>
<<<<<<< HEAD
            <p>
            { t("material.material_1") } 
            </p>
=======
            <p> {t("material.intro")} </p>
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
        </div>

        <div id='MaterialsMenu'>
            <div className='MaterialsMenuItem'>
                <a href='material-aspects/fronts'> 
<<<<<<< HEAD
                    <p> { t("material.fronts.title") } </p>
=======
                    <p> {t("material.fronts")} </p>
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
                    <img src={'/static/img/materials/materialsFronts.jpeg'}/>
                </a>
            </div>

            <div className='MaterialsMenuItem'>
                <a href='material-aspects/backs'>
<<<<<<< HEAD
                    <p> { t("material.backs.title") } </p>
=======
                    <p> {t("material.backs")} </p>
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
                    <img id='BackMenuImage' src={'/static/img/materials/materialsBacks.jpeg'}/>
                </a> 
            </div>

            <div className='MaterialsMenuItem'>
                <a href='material-aspects/envelopes'> 
<<<<<<< HEAD
                    <p> { t("material.envelopes.title") } </p>
=======
                    <p> {t("material.envelopes")} </p>
>>>>>>> 8a21c68e4939982a703687c64e4ab7241da27d99
                    <img src={'/static/img/materials/materialsEnvelopes.jpeg'}/>
                </a> 
            </div>
        </div>
    </>
    );
};

export default Material;