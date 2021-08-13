import axios from 'axios'
import { useEffect, useState } from 'react'

const useApiSearch = (query, pageNumber) => {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [characters, setCharacter] = useState([])
    const [isMore, setIsMore] = useState(false)

    useEffect(()=>{
        setCharacter([])
    },[query])

    useEffect(()=>{
        setLoading(true)
        setError(false)
        let cancel
        axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${query}`,
            params: {q: query, page: pageNumber},
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            console.log(res)
            setCharacter(prevCharacter => {
                return [...new Set([...prevCharacter, ...res.data.results.map(c => c.name)])]
            })
            setIsMore(res.data.info.pages > pageNumber)
            setLoading(false)
            console.log(res.data)
        }).catch(e => {
            if(axios.isCancel(e))return
            setError(true)
        })
        return () => cancel();
    },[query,pageNumber])


    return {loading, characters, isMore,error}
}

export default useApiSearch
