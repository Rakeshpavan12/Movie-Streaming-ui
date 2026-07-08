import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../Components/Navbar'
import MovieRow from '../Components/MovieRow'
import { MdOutlineStar } from 'react-icons/md'
import MovieModal from '../Components/MovieModal.jsx'
import { searchMovies, fetchMovieTrailer ,TeluguMovies, HindiMovies,EnglishMovies,TamilMovies,MalayalamMovies,KannadaMovies } from '../services/tmdb.js'
// States
function Home() {
  const navigate = useNavigate()
  const[selectedMovie,setSelectedMovie] = useState(null);
  const [telugumovies,setTelugumovies] = useState([])
  const [hindiMovies, setHindiMovies] = useState([])
  const [tamilMovies, setTamilMovies] = useState([])
  const [englishMovies, setEnglishMovies] = useState([])
  const [malayalamMovies,setMalayalamMovies] = useState([])
  const [kannadaMovies,setKannadaMovies] = useState([])
  const[movies,setMovies] = useState([])
  const [showprofile,setshowprofile] = useState(false)
  const [showModal, setShowModal] = useState(false)


  const username = localStorage.getItem("username")

// Search Function
  const searchMovie = async (query) => {
  if(query.trim() === ""){
    setMovies([])
    return
  }

  const data = await searchMovies(query)
  setMovies(data)
}



useEffect(() => {
  const loadMovies = async () => {
    const telugu = await TeluguMovies()
    const hindi = await HindiMovies()
    const english = await EnglishMovies()
    const tamil = await TamilMovies()
    const malayali = await MalayalamMovies()
    const kannada = await KannadaMovies()

    setTelugumovies(telugu)
    setHindiMovies(hindi)
    setEnglishMovies(english)
    setTamilMovies(tamil)
    setMalayalamMovies(malayali)
    setKannadaMovies(kannada)

    if (telugu.length > 0) {
      setSelectedMovie(telugu[0])
    }
  }

  loadMovies()
}, [])

useEffect(() => {

  const isLoggedIn =
  localStorage.getItem("isLoggedIn")

  if(!isLoggedIn){
    navigate("/")
  }

}, [])

// // Modal 
const MovieClick = (movie)=> {
  setSelectedMovie(movie);
  setShowModal(true);
};

// Trailer Function

const playTrailer = async () => {

  const videos =
  await fetchMovieTrailer(selectedMovie.id)
  console.log("Videos",videos)

  const trailer = videos.find(
    (video) => video.type === "Trailer") || videos.find(video => video.site === "Youtube")
    console.log("Trailer:",trailer)

  if(trailer){

    window.open(
      `https://www.youtube.com/watch?v=${trailer.key}`,
      "_blank"
    )

  } else {
    alert("trailer not available")
  }

}


const handleLogout = () => {

  localStorage.removeItem("isLoggedIn")

  navigate("/")

}
  return (
    <div>
      
    <Navbar searchMovie = {searchMovie} showProfile={showprofile} setShowProfile={setshowprofile}
    username={username} handleLogout={handleLogout} />
    {
      selectedMovie && (
    <div className="hero-banner" style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)),url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`}}>
        <div className='banner-content'>
        <h1 className='banner-title'>{selectedMovie.title}</h1>
                <p className="movie-info">
                <MdOutlineStar className="star-info" />{selectedMovie.vote_average}
                </p>
        <p className='banner-description'>{selectedMovie.overview}</p>
        <div className='banner-buttons'>
            <button className="trailer-btn" onClick={playTrailer}> Watch Trailer</button>
            <button className='trailer-btn' onClick={()=> setShowModal(true)}>ℹ  More info</button>
        </div>
        </div>
    </div>
    
    
      )
    }
    {
      showModal && (
        <MovieModal
        movie={selectedMovie}
        closeModal={()=>setShowModal(false)}
        />
      )
    }
    {/* Search Results */}
{
  movies.length > 0 ? (
    <MovieRow
      title="Search Results"
      movies={movies}
      setSelectedMovie={setSelectedMovie}
    />
  
  ) : (
    <>
    {/* Language Rows */}
      <MovieRow
        title="Telugu Movies"
        movies={telugumovies}
        setSelectedMovie={MovieClick}
      />

      <MovieRow
        title="Hindi Movies"
        movies={hindiMovies}
        setSelectedMovie={MovieClick}
      />

      <MovieRow
        title="English Movies"
        movies={englishMovies}
        setSelectedMovie={MovieClick}
      />

      <MovieRow
        title="Tamil Movies"
        movies={tamilMovies}
        setSelectedMovie={MovieClick} 
      />

      <MovieRow
        title="Malayalam Movies"
        movies={malayalamMovies}
        setSelectedMovie={MovieClick}
      />
      <MovieRow 
        title="Kannada Movies"
        movies={kannadaMovies}
        setSelectedMovie={MovieClick}
        />
    </>
  )
}
</div>
  )
}

export default Home