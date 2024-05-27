import { Link } from "react-router-dom"
import { CartItem } from "./types"

export default function Navbar (props: {
  cart: CartItem[]
}) {
  return (
    <>
      <div>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <Link to='/test'>Test</Link>
      </div>
      <div>
        <Link to='/list'>List</Link>
      </div>
      <div>
        Cart items: {props.cart.length}
      </div>
    </>
  )
}