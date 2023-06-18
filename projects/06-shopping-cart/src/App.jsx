import { products as initialProducts } from './mock/products.json'

// Components
import { Products } from './components/Products.jsx'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

// Custom Hooks
import { useFilters } from './hooks/useFilters'

function App () {
  const { filters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}

export default App
