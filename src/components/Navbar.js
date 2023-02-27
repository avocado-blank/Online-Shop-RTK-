import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {
  const { cartTotalQuantity } = useSelector((state) => state.cart)
  return (
    <Nav>
      <Link to="/">
        <h2>OnlineShop</h2>
      </Link>
      <div className="nav-bag">
        <Link to="/shopcart">
          <FontAwesomeIcon icon={faBagShopping} />
        </Link>
        <div className="num">
          <span>{cartTotalQuantity}</span>
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled('div')`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;

  h2 {
    color: #ff6767;
    font-size: 2rem;
  }
  .nav-bag {
    display: flex;
    width: 40px;
    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 2rem;
      color: #ff6767;
    }

    .num {
      color: #ff6767;
    }
  }
`
export default Navbar
