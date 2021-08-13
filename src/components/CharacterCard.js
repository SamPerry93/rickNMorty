import React, { memo } from 'react'

const CharacterCard = ({character}) => {
    const liStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '12px',
        background: '#f3f3f4',
        borderRadius: '10px'
    }
    const imgStyle = {
        padding: 0,
        margin:0,
        width:'100%',
        objectFit: 'fill',
        borderRadius: "10px 10px 0 0"
    }
    return (
        <>
        <li style={liStyle} key={character.id}>               
            <img style={imgStyle} src={character.image} alt="" />
            <h1>{character.name}</h1>
            <p>{character.location.name}</p>
            <p>{character.status}</p>
            <p>{character.gender}</p>
            <p>{character.species}</p>
            <p>{character.type}</p>
            {/* <a href={character.origin.url}>{character.origin.name}</a> */}
        </li>
        </>
    )
}

export default memo(CharacterCard)
