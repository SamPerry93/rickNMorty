  import { useCallback, useRef, useState } from 'react';
import useApiSearch from './useApiSearch';

const Character = () => {
    const [query, setQuery] = useState('')
    const[pageNumber, setPageNumber] = useState(1)
    const {
        characters,
        isMore,
        loading,
        error
    } = useApiSearch(query,pageNumber)


    const observer = useRef()
    const lastCharacterElementRef = useCallback(node => {
        if(loading) return
        //remove observer from last element
        if(observer.current) observer.current.disconnect()
        //set new observer
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting && isMore){
                console.log('visible')
                setPageNumber(prevPageNumber => prevPageNumber + 1)
                console.log(pageNumber)
            }
        })
        
        if(node) observer.current.observe(node)
        console.log(node)
    },[loading,isMore])


    const handleSearch = (e)=>{
        setQuery(e.target.value)
        setPageNumber(1)
    }
    

    return(
        <div>
            <input type="text" onChange={handleSearch}/>
            {characters.map((char,idx) => {
                if(characters.length === idx + 1){
                    return <div style={{
                        marginTop: '100px',
                        marginBottom:'100px'
                    }} ref={lastCharacterElementRef} key={char.id}>{char}</div>
                }else{
                    return <div style={{
                        marginTop: '100px',
                        marginBottom:'100px'
                    }} key={char.id}>{char}</div>
                }
                
            })}
            <div>{loading && 'loading...'}</div>
            <div>{error && 'error...'}</div>
            {/* <button onClick={searchCharacters}>Search</button>
            <ul style={ulStyle}>
            {characters.map(character => {
                return(
                    <CharacterCard key={character.id} character={character}/>
                )
            })}
            </ul> */}
        </div>
    )
}
  export default Character
  