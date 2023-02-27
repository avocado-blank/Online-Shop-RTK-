import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FetchSearchProduct } from '../features/SearchCartSlice'
import { Link } from 'react-router-dom'

function Home() {
  const { items, status } = useSelector((state) => state.products)
  // console.log(status);

  const dispatch = useDispatch()
  return (
    <>
      {status === 'pending' ? (
        <Loading>
          <h2>Loading ...</h2>
        </Loading>
      ) : (
        <Shopcart>
          {items?.map((item) => (
            <Link to="/detail" key={item.id}>
              <div
                className="cart"
                onClick={() => dispatch(FetchSearchProduct(item.id))}
              >
                <img src={item.image} alt="img" />
                <div>
                  <p>{item.title}</p>
                </div>
              </div>
            </Link>
          ))}
        </Shopcart>
      )}
    </>

    //
  )
}

const Shopcart = styled('div')`
  margin-top: 2rem;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  .cart {
    background: whitesmoke;
    padding: 1rem;
    border-radius: 10%;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    user-select: none;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    margin-bottom: 1.5rem;
    border-radius: 10%;
  }
  p {
    color: black;
  }
`

const Loading = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`

export default Home
