import React, { memo } from 'react';

const CharacterCard = ({character}) => {
    
    const imgStyle = {
        padding: 0,
        margin:0,
        width:'100%',
        objectFit: 'fill',
        borderRadius: "10px 10px 0 0"
    }
    
    

    return (
        <>
                       
            <img style={imgStyle} src={character.image} alt="" />
            <h1>{character.name}</h1>
            <p>{character.location.name}</p>
            <p>{character.status}</p>
            <p>{character.gender}</p>
            <p>{character.species}</p>
            <p>{character.type}</p>
            {/* <a href={character.origin.url}>{character.origin.name}</a> */}
        </>
    )
}

export default memo(CharacterCard)
