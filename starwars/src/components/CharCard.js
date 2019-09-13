import React from 'react';
// import styled from "styled-components";




const CharCard = (props) =>{
    return(
    <div> 
        <h1>{props.name}</h1>
        <h6>{props.height}</h6>
        <h6>{props.weight}</h6>
        <h6>{props.birthYear}</h6>
        <h6>{props.gender}</h6>
    </div>    
    );
}



export default CharCard;