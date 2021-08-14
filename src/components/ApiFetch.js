import React, { useCallback, useEffect, useRef, useState } from 'react'
import CharacterCard from './CharacterCard'

const ApiFetch = () => {
    const [characters, setCharacters] = useState([])
    const [pageNum, setPageNum] = useState(1)
    const [currentPage,setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState('')
    const [isVis, setIsVis] = useState(false)

    const URL = `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${query}`

    

    const handleFetch = async () =>{
        setLoading(true)
        await fetch(URL)
            .then(res => res.json())
            .then(results =>{
                console.log(results)
                
                setPageNum(results.info.pages)
                setCharacters(prevCharacter => {
                    return [...prevCharacter, ...results.results.map(b => b)]
                })
                handleLoadMore()
                console.log(currentPage)
                setLoading(false)
            })
            .catch(error => console.error('Error', error))
            
    }
    const handleLoadMore = () => {
        setCurrentPage(prev => prev + 1); 
    }
    useEffect(() => {
        handleFetch()
    }, [])
    useEffect(() => {
    if(currentPage <= pageNum && isVis){
        
        handleFetch()
    }else{console.log('End of results')} 
    }, [isVis])

const last = useRef()
const lastCharacter = useCallback(node => {
    if(lastCharacter.current) last.current.unobserve(last.current)
        last.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting ){
                 console.log('visible')
                 setIsVis(true)
                console.log(currentPage)
            }
            setIsVis(false)
        },{threshold: 1})
        if(node) last.current.observe(node)
        console.log(node)
},[isVis])

    return (
        <div>
           {!loading ?(
               characters.map((char, idx) => {
                   if(characters.length ===  idx + 1){
                    return (
                        <li key={char.id} ref={lastCharacter}>
                        <CharacterCard character={char}/>
                        </li>
                        )
                   }else{
                       return <li key={char.id}><CharacterCard  character={char}/></li>
                   }
            })
           ) : (
               <h2>Loading...</h2>
           )
        }
         <button onClick={handleLoadMore}>Load More</button>   
        </div>
    )
}

export default ApiFetch
