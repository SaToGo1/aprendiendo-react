import { useState, useId } from 'react'
import './Filters.css'

export function Filters ({ changeFilters }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    const newPrice = event.target.value
    setMinPrice(newPrice)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: newPrice
    }))
  }

  const handleChangeCategory = (event) => {
    changeFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiltes</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>
    </section>
  )
}
