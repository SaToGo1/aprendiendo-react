import { useState } from 'react'
import { products as initialProducts } from './mock/products.json'

// Components
import { Products } from './components/Products.jsx'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

// Custom Hooks
import { useFilters } from './hooks/useFilters'

function App () {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )
}

export default App
