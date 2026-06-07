import { useEffect, useState } from 'react'
import {searchMovies,fetchTrendingMovies} from '../services/tmdb.js'
import Navbar from '../Components/Navbar'
import MovieRow from '../Components/MovieRow'
import { fetchMovieTrailer } from '../services/tmdb'
import { MdOutlineStar } from 'react-icons/md'

function Home() {
  const[selectedMovie,setSelectedMovie] = useState(null);
  const[movies,setMovies] = useState([])
  const searchMovie = async (query) => {
  if(query.trim() === ""){
    const data = await fetchTrendingMovies()
    setMovies(data)
    return
  }

  const data = await searchMovies(query)
  setMovies(data)
}
useEffect(() => {

  const loadMovies = async () => {

    const data = await fetchTrendingMovies()

    setMovies(data)
    setSelectedMovie(data[0])

  }

  loadMovies()

}, [])
const playTrailer = async () => {

  const videos =
  await fetchMovieTrailer(selectedMovie.id)

  const trailer = videos.find(
    (video) => video.type === "Trailer"
  )

  if(trailer){

    window.open(
      `https://www.youtube.com/watch?v=${trailer.key}`,
      "_blank"
    )

  }

}
  return (
    <div>
    <Navbar searchMovie = {searchMovie} />
    {
      selectedMovie && (
    <div className="hero-banner" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`}}>
        <div className='banner-content'>
        <h1 className='banner-title'>{selectedMovie.title}</h1>
                <p className="movie-info">
                <MdOutlineStar className="star-info" />{selectedMovie.vote_average}
                </p>
        <p className='banner-description'>{selectedMovie.description}</p>
        <div className='banner-buttons'>
            <button className="watch-btn">Watch Now</button>
            <button className="trailer-btn" onClick={playTrailer}>Trailer</button>
        </div>
        </div>
    </div>
      )
    }
    <MovieRow
title="Top Movies"
movies={movies}
setSelectedMovie = {setSelectedMovie}
className="row-title"
/>
</div>
  )
}

export default Home