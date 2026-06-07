
import Moviecard from './Moviecard'
function MovieRow({
    movies, 
    title,
    setSelectedMovie}) {
  return (
    <div className='movie-row'>
        <h2 className="row-title">{title}</h2>
        <div className='movie-cards'>
            {
                movies.map((movie,index)=>(
                    <Moviecard
                    key={index}
                    movie={movie}
                    setSelectedMovie = {setSelectedMovie}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default MovieRow