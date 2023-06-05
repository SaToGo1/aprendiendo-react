import { useState, useEffect } from 'react'
import './styles/App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const App = () => {
  const [fact, setFact] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [factError, setFactError] = useState()

  // para recuperar la cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        // if (!res.ok) {
        //   setFactError('No se ha podido recuperar la cita')
        // }
        if (!res.ok) throw new Error('Error fetching fact')
        return res.json()
      })
      .then(data => setFact(data.fact))
      // .catch((err) => {
      //   // tanto si hay un error con la respuesta
      //   // como si hay un error con la petición
      // })
  }, [])

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
