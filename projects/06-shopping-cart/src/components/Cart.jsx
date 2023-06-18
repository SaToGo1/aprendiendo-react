import { ClearCartIcon, CartIcon } from './Icons'
import { useId } from 'react'
import './Cart.css'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src=''
              alt='Iphone'
            />
            <div>
              <strong>iPhone</strong> - $1499
            </div>

            <footer>
              <small>
                Qty: 1
                <button>+</button>
              </small>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}