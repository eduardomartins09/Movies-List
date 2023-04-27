import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import MovieCard from '../components/MovieCard'

 
const API_KEY = `7bcc916b835fb16aa7c22a673eda7f1f`;

import './MoviesGrid.css'

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
    const searchWithQueryURL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    getSearchedMovies(searchWithQueryURL)
  }, [query])

  const showLink = true

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