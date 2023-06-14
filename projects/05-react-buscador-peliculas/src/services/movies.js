import { API_KEY } from './API_KEY'

export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await res.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}