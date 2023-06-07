import { useState, useEffect } from 'react'
import { getRandomFact } from './services/facts'

export function useCatFact () {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    getRandomFact().then(fact => setFact(fact))
  }

  // para recuperar la cita al cargar la página
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
