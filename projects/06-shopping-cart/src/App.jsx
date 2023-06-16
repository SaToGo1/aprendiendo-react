import { products } from './mock/products.json'
import { Products } from './components/Products.jsx'

function App() {
  return (
    <>
      <Products products={products} />
    </>
  )
}

export default App
