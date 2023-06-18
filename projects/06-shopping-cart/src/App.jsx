import { products as initialProducts } from './mock/products.json'

// Components
import { Products } from './components/Products.jsx'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'

// Custom Hooks
import { useFilters } from './hooks/useFilters'

// Context
import { CartProvider } from './context/cart'

function App () {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
