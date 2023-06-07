import './styles/App.css'

import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Change Fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl &&
        <img
          src={imageUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />}
    </main>
  )
}
