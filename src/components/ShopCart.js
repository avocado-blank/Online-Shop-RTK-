import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  addQuantity,
  decreaseQuantity,
  removeAllFromCart,
  removeFromCart,
} from '../features/ShopCartSlice'

function ShopCart() {
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart)
  // console.log(cartTotalAmount)
  const dispatch = useDispatch()
  return (
    <>
      {cartItems.length === 0 ? (
        <Noitem>
          <h2>No Items</h2>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Start Shopping</span>
          </Link>
        </Noitem>
      ) : (
        <div>
          <Title>
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3>Total</h3>
          </Title>
          <hr />

          <div className="cart-items">
            {cartItems?.map((item) => (
              <CartItem key={item.id}>
                <CartProduct>
                  <img src={item.image} alt="img" />
                  <div>
                    <p>Rating:{item.rating.rate}</p>
                    <button
                      onClick={() => {
                        dispatch(removeFromCart(item))
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </CartProduct>
                <CartItemPrice>
                  <p>${item.price}</p>
                </CartItemPrice>
                <CartQuantity>
                  <button onClick={() => dispatch(decreaseQuantity(item))}>
                    -
                  </button>
                  <div className="count">{item.cartQuantity}</div>
                  <button onClick={() => dispatch(addQuantity(item))}>+</button>
                </CartQuantity>
                <CartTotalAmount>
                  ${(item.price * item.cartQuantity).toFixed(2)}
                </CartTotalAmount>
              </CartItem>
            ))}
            <hr />
          </div>
          <CartSummary>
            <button onClick={() => dispatch(removeAllFromCart())}>
              Clear Cart
            </button>
            <div className="checkout">
              <div className="subtotal">
                <span>SubTotal</span>
                <span className="totalamount">
                  ${cartTotalAmount.toFixed(2)}
                </span>
              </div>
              <div className="start-shopping">
                <Link to="/">
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </CartSummary>
        </div>
      )}
    </>
  )
}

const Noitem = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 1.5rem;
  user-select: none;

  svg {
    margin-top: 1.5rem;
    cursor: pointer;
    color: black;
  }

  span {
    color: black;
    margin-left: 0.5rem;
  }
`

const Title = styled('div')`
  margin: 2rem 0 1.5rem 0;
  display: flex;
  justify-content: space-around;
`

const CartItem = styled('div')`
  margin: 1.5rem 0 1.5rem 0;
  display: flex;
  justify-content: space-around;

  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    padding-right: 1.5rem;
  }
`

const CartProduct = styled('div')`
  /* margin-right: 1.5rem; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: black; */

  button {
    cursor: pointer;
    margin-top: 1.5rem;
    padding: 0.5rem;
    transition: all 0.3s ease-in-out;
    border: none;
    &:hover {
      background: yellow;
    }
  }
`

const CartItemPrice = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CartQuantity = styled('div')`
  /* margin-left: 5rem; */
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  button {
    margin: 0 1.5rem;
    padding: 0.5rem;
    cursor: pointer;
  }
`

const CartTotalAmount = styled('div')`
  margin-left: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CartSummary = styled('div')`
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: black; */
  padding: 0 5rem;

  button {
    padding: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: none;
    &:hover {
      background: red;
    }
  }

  .totalamount {
    color: blue;
    /* font-size: 1.5rem; */
  }
  .subtotal {
    padding-right: 1.5rem;
    span {
      padding: 0.5rem;
      font-size: 1.5rem;
      color: blue;
    }
  }

  .start-shopping {
    margin-top: 1rem;

    svg,
    span {
      color: black;
      padding: 0 0.2rem;
      color: green;
    }
  }
`

export default ShopCart
