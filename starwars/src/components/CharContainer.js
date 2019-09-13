import React, {useState, useEffect} from 'react';
// import styled from "styled-components";
import CharCard from "./CharCard"
import axios from 'axios';



const CharContainer = () => {

    const [starChars, setStarChars] = useState([]);


    useEffect(() => {
        axios.get('https://swapi.co/api/people/')
        .then((response) => {
        console.log(response);
        console.log(response.data.results);
        setStarChars(response.data.results);
        })
        .catch(error => {
        console.log(`Error: `,error);
        })
    })

    console.log(starChars);

    return(
        <div>
        {starChars.map(character => {
            return(
                <CharCard 
                key={character.name}
                name={character.name}
                height = {character.height}
                weight = {character.mass}
                birthYear = {character.birth_year}
                gender = {character.gender}
                // eyeColor = {character.eye_color}
                // skinColor = {character.skin_color}
                // hairColor = {character.hair_color}
                />
            );
        })};
      </div>  
  )
}

export default CharContainer;