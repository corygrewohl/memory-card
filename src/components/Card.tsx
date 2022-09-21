import React, {useState, useEffect, FC } from "react";
import '../Sass/App.scss'

interface CardProps {
    name: string;
    image: string;
    handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const Card:FC<CardProps> = ({image, name, handleClick}) => {
    return (
        <div className="card-container" onClick={handleClick}>  
            <img src={image}></img>
            <p>{name}</p>
        </div>
    )
}

export default Card;