const API_KEY = import.meta.env.VITE_API_KEY

export const fetchTrendingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  )

  const data = await response.json()
  return data.results
}
export const fetchMovieTrailer = async (movieId) => {

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  )

  const data = await response.json()

  return data.results
}

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  )

  const data = await response.json()
  return data.results
}
