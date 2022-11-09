import React from "react";

const Material = () => {
    return (
    <>
        <h2> Material Aspects </h2>

        <div id="MaterialImgContainer">
        <img id="MaterialMascot" src={'/static/img/misc/mascot.jpg'}/>
        <p id="MaterialsBlurb">
            For gaming and gambling purposes, playing cards were assigned abstract values 
            that allowed players to compete against each other, or against the betting 
            establishment where the games were played.  But playing cards were also material objects
            that were manufactured and sold to consumers. To understand fully the materiality of 
            French playing cards from 1650 to 1850, we have created pages to examine the fronts of 
            the cards, their backs, and the envelopes in which they were wrapped by their 
            manufacturers.
        </p>
        </div>

        <div id='MaterialsMenu'>
            <div className='MaterialsMenuItem'>
                <p> <a href='material-aspects/fronts'> Fronts </a> </p>
                <img src={'/static/img/materials/materialsFronts.jpeg'}/>
            </div>

            <div className='MaterialsMenuItem'>
                <p> <a href='material-aspects/backs'> Backs </a> </p>
                <img src={'/static/img/materials/materialsBacks.jpeg'}/>
            </div>

            <div className='MaterialsMenuItem'>
                <p> <a href='material-aspects/envelopes'> Envelopes </a> </p>
                <img src={'/static/img/materials/materialsEnvelopes.jpeg'}/>
            </div>
        </div>
    </>
    );
};

export default Material;