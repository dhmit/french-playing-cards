import React from "react";
import {useTranslation} from "react-i18next";

const Material = () => {

    React.useEffect(() => {
        document.title = "Material Aspects | French Playing Cards";        
    }, []);
    const {t} = useTranslation();

    return (
        <>
            <h2 className="page-header">{t("material.header")}</h2>

            <div className="material-subpage-intro">
                <img src={"/static/img/misc/mascot.jpg"}/>
                <p>
                    { t("material.material_1") } 
                </p>
            </div>

            <div id='MaterialsMenu'>
                <div className='MaterialsMenuItem'>
                    <a href='material-aspects/fronts'> 
                        <p> { t("material.fronts.title") } </p>
                        <img src={"/static/img/materials/materialsFronts.jpeg"}/>
                    </a>
                </div>

                <div className='MaterialsMenuItem'>
                    <a href='material-aspects/backs'>
                        <p> { t("material.backs.title") } </p>
                        <img id='BackMenuImage' src={"/static/img/materials/materialsBacks.jpeg"}/>
                    </a> 
                </div>

                <div className='MaterialsMenuItem'>
                    <a href='material-aspects/envelopes'> 
                        <p> { t("material.envelopes.title") } </p>
                        <img src={"/static/img/materials/materialsEnvelopes.jpeg"}/>
                    </a> 
                </div>
            </div>
        </>
    );
};

export default Material;