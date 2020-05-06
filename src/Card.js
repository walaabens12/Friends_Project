import React from "react";
import './Card.css'
import 'tachyons'


function Card(x) {
    return (

        <div className="bg-light-green dib pa3 ma4 grow tc   shadow-5  br-74 image">
            <img className="avatar" src={require(`./images/${x.src}.jpg`)} alt="A Friend" />
            <h2 className="times">{x.name}</h2>
            <p className="fw5">{x.des}</p>

        </div>

    );
};
export default Card;
