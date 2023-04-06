import React from "react";
import { useTranslation } from "react-i18next";
import SolitaireGame from "./SolitaireGame";

const Games = () => {

    React.useEffect(() => {
        document.title = 'Play Games! | French Playing Cards';        
    }, []);

    const { t } = useTranslation();

    return (
        <>
            <h2 className="page-header">Play Games!</h2>
    
            <div className="material-subpage-intro">
                <img src={'/static/img/misc/mascot.jpg'}/>
                <p>
                    In progress... 
                </p>
            </div>

            <SolitaireGame/>
            

            {/* TODO: uncomment this once I figure out pop-up window, change the hyperlinks */}
            {/* <p className="games-header">Select a deck to play Solitaire with:</p>
            <br/>

            <div id='Games-Menu'>
                <div className='Games-Menu-Item'>
                    <a href='material-aspects/fronts'> 
                        <p>Portrait de Paris</p>
                        <img src={'/static/img/games/paris-menu.PNG'}/>
                    </a>
                </div>
    
                <div className='Games-Menu-Item'>
                    <a href='material-aspects/backs'>
                        <p>Jaume et Dugourc</p>
                        <img src={'/static/img/games/dugourc-menu.PNG'}/>
                    </a> 
                </div>
    
                <div className='Games-Menu-Item'>
                    <a href='material-aspects/envelopes'> 
                        <p>J-L David</p>
                        <img src={'/static/img/games/david-menu.PNG'}/>
                    </a> 
                </div>
            </div> */}
        </>
        );
};

export default Games;