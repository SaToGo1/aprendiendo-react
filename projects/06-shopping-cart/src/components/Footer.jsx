import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
  const { filters } = useFilters()

  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {/* <h4>prueba técnica de React -
        <span>@midudev</span>
      </h4>
      <h5>Shop</h5> */}
    </footer>
  )
}
