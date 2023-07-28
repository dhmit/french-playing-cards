import React from "react";
import { useTranslation } from "react-i18next";
import LinkCard from "../LinkCard";

const Home = () => {

    React.useEffect(() => {
        document.title = "Home | French Playing Cards";
    }, []);

    const { t } = useTranslation();

    // Card Data
    const cardData = [
        {
            img: "/static/img/home/history.jpg",
            title: t('home.history.title'),
            subtitle: t('home.history.subtitle'),
            link: "/history",
        },
        {
            img: "/static/img/home/explore.jpg",
            title: t('home.explore.title'),
            subtitle: t('home.explore.subtitle'),
            link: "/iconography/search",
        },
        {
            img: "/static/img/home/play.png",
            title: t('home.games.title'),
            subtitle: t('home.games.subtitle'),
            link: "/games",
        },
        {
            img: "/static/img/home/about.jpg",
            title: t('home.about.title'),
            subtitle: t('home.about.subtitle'),
            link: "/about",
        },
    ];

    return (<>
        <h2 className="page-header">{t("home.header")}</h2>
        <div id="home-card-grid" className="d-flex flex-wrap justify-content-around">
            {cardData.map((card, index) => (
                <LinkCard 
                    key={index} 
                    img={card.img} 
                    title={card.title} 
                    subtitle={card.subtitle} 
                    link={card.link} 
                />
            ))}
        </div>
    </>);
};

export default Home;
