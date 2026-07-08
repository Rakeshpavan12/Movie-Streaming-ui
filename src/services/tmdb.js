const API_KEY = import.meta.env.VITE_API_KEY
// Movie Trailer
export const fetchMovieTrailer = async (movieId) => {

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  )

  const data = await response.json()
  console.log("Movie Id:",movieId)
  console.log("Video Data:", data)

  return data.results
}
// Search Movies

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  )

  const data = await response.json()
  return data.results
}
// Language Movies
export const TeluguMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=te`
  )
  const data = await response.json();
  return data.results

}
export const HindiMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=hi`
  )
  const data = await response.json();
  return data.results

}
export const TamilMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=ta`
  )
  const data = await response.json();
  return data.results

}
export const MalayalamMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=ml`
  )
  const data = await response.json();
  return data.results

}
export const EnglishMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=en`
  )
  const data = await response.json();
  return data.results

}
export const KannadaMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_original_language=kn`
  )
  const data = await response.json();
  return data.results

}
