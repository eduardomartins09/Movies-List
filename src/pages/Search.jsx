import './MoviesGrid.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

import { API_KEY, urlGetMoviesSearch } from '../utils/api';

const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
  } 

  useEffect(() => {
    const searchWithQueryURL = `${urlGetMoviesSearch}?api_key=${API_KEY}&query=${query}`
    getSearchedMovies(searchWithQueryURL)
  }, [query])

  return (
    <div className='container'>   
        <div className="movies-container">
            {movies.map((movie, key) => (        
                <MovieCard movieList={movies} key={key}/>  
            ))}
        </div>     
    </div>
  )
}

export default Search