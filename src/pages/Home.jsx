import { useEffect, useState } from "react";

import axios from 'axios'
import moviesInstance from '../helper/axios-instance'
import useAxios from '../hook/use-axios'

import MovieCard from '../components/MovieCard'

import './MoviesGrid.css'

const API_KEY = `7bcc916b835fb16aa7c22a673eda7f1f`;

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const [movieList, loading, error] = useAxios({
    axiosInstance: moviesInstance,
    method: "GET",
    url: `/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`,
  });
  
  if (loading) return <div>loading</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
        <div className="movies-container">
          <MovieCard movieList={movieList} loading={loading} error={error} />
        </div>
    </div>
  )
}

export default Home