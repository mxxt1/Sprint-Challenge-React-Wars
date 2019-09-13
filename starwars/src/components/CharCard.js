import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    border: 1px solid #FFE81F;
    display:flex;
    flex-direction: column;
    width: 30%;
    margin: 2% 0 2% 0;
    background: black;
    color: #FFE81F;
    text-align:left;
`;

const CardTitle = styled.h1`
    border-bottom: 1px solid #ffe81f;
    display:flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5%;
    text-shadow: 1px 1px 2px white;
    letter-spacing:5px;
`;

const CardItem = styled.p`
    letter-spacing: 2px;
    word-spacing: 2px;
    padding:0 0 0 30%;

`;





const CharCard = (props) =>{
    return(
    <Card> 
        <CardTitle>{props.name}</CardTitle>
        <CardItem>Height:  {props.height} Centimeters</CardItem>
        <CardItem>Weight:  {props.weight} Kilograms</CardItem>
        <CardItem>Sex:  {props.gender}</CardItem>
        <CardItem>Born:  {props.birthYear}</CardItem>
        <CardItem>Eye Color:  {props.eyeColor}</CardItem>
        <CardItem>Skin Pigment:  {props.skinColor}</CardItem>
        <CardItem>Hair Color:  {props.hairColor}</CardItem>
        
    </Card>    
    )
}



export default CharCard;