import './App.css'
import responseMovies from './mock/with-results.json'
import withoutResults from './mock/no-results.json'

import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search

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
        <Movies movies={movies}/>
      </main>
    </div>
  )
}

export default App
