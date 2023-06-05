import { useState, useEffect } from 'react'

export const App = () => {
  const [fact, setFact] = useState('')
  const [imgSrc, setImgSrc] = useState('')

  useEffect(() => {
    // Fetching of the fact
    fetch('https://catfact.ninja/fact')
      .then(data => data.json())
      .then(factObj => {
        // save fact in state
        setFact(factObj.fact)
        return factObj.fact
      })
    // Getting first Word
      .then(fact => fact.split(' ')[0])
    // fetching image with first word
      .then(firstWord => {
        setImgSrc(`https://cataas.com/cat/says/${firstWord}`)
      })
  }, [])

  return (
    <>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
      <img src={imgSrc} alt='imagen de gatito' />
    </>
  )
}
