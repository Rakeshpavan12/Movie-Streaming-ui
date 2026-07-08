
import "./MovieModal.css"
function MovieModal({movie,closeModal}) {
  return (
    <div className="modal-overlay">
        <div className="modal">
            <button className="close-btn" onClick={closeModal}>X</button>
            <div className="modal-content">
            <img src = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="modal-details">
            <h2>{movie.title}</h2>
            <p className="movie-rating">⭐{movie.vote_average}</p>
            <p>Released Date:  📅{movie.release_date}</p>
            <p>{movie.overview}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default MovieModal