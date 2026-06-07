
import { MdOutlineStar } from "react-icons/md";
function Moviecard({
    movie,
    setSelectedMovie
}) {
  return (
    <div className="movie-card" onClick ={
        ()=>setSelectedMovie(movie)
    }>
      <img
  src={
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/300x450?text=No+Image"
  }
  alt={movie.title}
  className="movie-image"
/>
        <h3 className="movie-title">{movie.title || movie.name}</h3>
        <p className="movie-info">
        <MdOutlineStar className="star-info" />{movie.vote_average?.toFixed(1)}
        </p>
    </div>
  )
}
export default Moviecard
