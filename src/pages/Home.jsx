import './MoviesGrid.css'
import { useEffect, useState } from "react";

import MovieCard from '../components/MovieCard'

import { API_KEY, urlGetMovies } from "../utils/api";

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
 
  const fetchData = async () => {
    try {
        const res = await fetch(`${urlGetMovies}/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
        const resJ = await res.json()
        setData(resJ.results)
    } catch (err) {
        setError(err.message)
    } finally {
        setLoading(false)
    }
  } 

  useEffect(() => {
    fetchData()
  }, []) 

  if (loading) return <div>loading...</div>;
  if (error) return <div>{error}</div>; 
 
  return (
    <div className="container">
        <div className="movies-container">
          {data && (
            <MovieCard movieList={data} loading={loading} error={error} />
          )}
        </div>
    </div>
  )
}

export default Home