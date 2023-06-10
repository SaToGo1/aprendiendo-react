import './App.css'
import responseMovies from './mock/with-results.json'
import withoutResults from './mock/no-results.json'

function App() {
  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <div className='app'>
      <header>
        <h1>Buscador de Películas</h1>
        <form>
          <input placeholder='Avengers, Star Wars' />
          <button type='submit'>Buscar</button>
        </form>
      </header>
      <main>
        {
          hasMovies
            ? (
              <ul>
                {movies.map((movie) => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))}
              </ul>
            )
            : (
              <h3>No se encontraron resultados</h3>
            )
        }
      </main>
    </div>
  )
}

export default App
