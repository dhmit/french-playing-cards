import React from "react";
import {useTranslation} from "react-i18next";
import DivinationGame from "../DivinationGame";
import SolitaireGame from "./SolitaireGame";

const Games = () => {

    React.useEffect(() => {
        document.title = "Play Games! | French Playing Cards";        
    }, []);

    const {t} = useTranslation();

    return (
        <>
            <h2 className="page-header">{t("games.header")}</h2>

            <div className="material-subpage-intro">
                <img src={"/static/img/misc/mascot.jpg"}/>
                <p className="material-subpage-blurb">
                    {t("games.play")}
                </p>
            </div>

            {/*

            <DivinationGame />
            <SolitaireGame/>
            

            <p className="games-header">Select a deck to play Solitaire with:</p>
            <br/>

            <div id='Games-Menu'>
                <div className='Games-Menu-Item'>
                    <a href='<insert link to Portrait de Paris version>'>
                        <p>Portrait de Paris</p>
                        <img src={'/static/img/games/paris-menu.PNG'}/>
                    </a>
                </div>
    
                <div className='Games-Menu-Item'>
                    <a href='<insert link to Jaume et Dugourc version>'>
                        <p>Jaume et Dugourc</p>
                        <img src={'/static/img/games/dugourc-menu.PNG'}/>
                    </a> 
                </div>
    
                <div className='Games-Menu-Item'>
                    <a href='<insert link to J-L David version>'> 
                        <p>J-L David</p>
                        <img src={'/static/img/games/david-menu.PNG'}/>
                    </a> 
                </div>
            </div> */}
        </>
    );
};

export default Games;
