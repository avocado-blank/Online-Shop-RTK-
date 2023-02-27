import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Notfound() {
  return (
    <>
      {localStorage.getItem('cartItems') === null ? (
        <NoFound>
          <h2>No Item Added! Go Back to Shop</h2>
          <div>
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
        </NoFound>
      ) : (
        <NoFound>
          <h2>404 : Page not found</h2>
          <div>
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
        </NoFound>
      )}
    </>
  )
}

const NoFound = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  svg {
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
  }
`

export default Notfound
