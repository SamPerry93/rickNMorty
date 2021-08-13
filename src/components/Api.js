import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';

const Api = () => {
const [characters, setCharacters] = useState([])
const [characterName ,setCharcterName] = useState('')

const searchCharacters = async (e) => {
    
    await axios.get(`https://rickandmortyapi.com/api/character?name=${characterName}`)
    .then((response) => {
      setCharacters(response.data.results)
      console.log(response.data.results)
      //console.log(characters);
    });
}
useEffect(()=>{
    searchCharacters()
    console.log('useEffect render')
},[])

const ulStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    justifyItems: 'center'
}
    return (
        <div>
            <input type="text" value={characterName} onChange={(e) => setCharcterName(e.target.value)}/>
            <button onClick={searchCharacters}>Search</button>
            <ul style={ulStyle}>
            {characters.map(character => {
                return(
                    <CharacterCard key={character.id} character={character}/>
                )
            })}
            </ul>
        </div>
    )
}

export default Api
