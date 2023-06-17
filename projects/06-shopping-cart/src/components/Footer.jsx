import './Footer.css'

export function Footer ({ filters }) {
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
