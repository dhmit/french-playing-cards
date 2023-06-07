import React from "react";

const Solitaire = () => {

    React.useEffect(() => {
        document.title = "Solitaire";        
    }, []);

    return (
        <>

            {/* TODO: uncomment and change the hyperlinks */}
            {/* <div id='Games-Menu'>
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

export default Solitaire;
