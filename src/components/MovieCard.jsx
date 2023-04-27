import React from 'react'

import { Link } from 'react-router-dom'


const MovieCard = ({ movieList, loading, error, showLink = true }) => {
    
  return (
    <>
      {movieList.map((movie) => (
          <div className='movie-card' key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} alt={movie.title} />
              <h2>{movie.title}</h2>
              {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
          </div>   
      ))}
    </>
  )
}

export default MovieCard