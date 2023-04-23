import React from "react";
import DivinationGame from "../DivinationGame";
import { useTranslation } from "react-i18next";

const Games = () => {

    React.useEffect(() => {
        document.title = 'Play Games! | French Playing Cards';        
    }, []);

    const { t } = useTranslation();

    return (
        <>

        <h2 className="page-header">{t("games.header")}</h2>

        <div className="material-subpage-intro">
            <img src={'/static/img/misc/mascot.jpg'}/>
            <p className="material-subpage-blurb">
                {t("games.play")}
            </p>
        </div>

        <DivinationGame />

        </>
    );
};

export default Games;