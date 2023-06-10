import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()
  
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
