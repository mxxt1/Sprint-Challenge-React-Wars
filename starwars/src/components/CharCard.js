import React from 'react';
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid #FFE81F;
    width: 30%;
    margin: 2% 0 2% 0;
    background: black;
    color: #FFE81F;
`;

const CardTitle = styled.h1`
    border-bottom: 1px solid #ffe81f;
    display:flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5%;
`;

const CardItem = styled.p`


`;





const CharCard = (props) =>{
    return(
    <Card> 
        <CardTitle>{props.name}</CardTitle>
        <CardItem>Height: {props.height}</CardItem>
        <CardItem>Weight: {props.weight}</CardItem>
        <CardItem>Gender: {props.gender}</CardItem>
        <CardItem>Born: {props.birthYear}</CardItem>
        
    </Card>    
    )
}



export default CharCard;