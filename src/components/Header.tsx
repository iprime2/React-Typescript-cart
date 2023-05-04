import useCart from '../hooks/useCart'
import Nav from './Nav'

type PropsType = {
  viewCart: boolean
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart()

  const content = (
    <header className='header'>
      <div className='header__title-bar'></div>
      <h1>Krishil</h1>
      <div className='header__price-box'>
        <p>Total items: {totalItems}</p>
        <p>Total price: {totalPrice}</p>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  )
  return content
}

export default Header
