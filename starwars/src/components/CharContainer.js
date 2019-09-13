import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CharCard from './CharCard';
import axios from 'axios';


const Container = styled.div`
    border:2px solid black;
    width: 80%;
    margin: 0 auto;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    justify-content: space-evenly;
    padding:3%;
    background: rgba(0, 0, 0, 0.5);;



`;






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
    },[])

    console.log(starChars);

    return(
        <Container>
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
            )
        })}
      </Container>  
  )
}

export default CharContainer;