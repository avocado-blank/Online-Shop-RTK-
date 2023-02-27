import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { addToCart } from "../features/ShopCartSlice";
import { useHistory } from 'react-router'

function Cart() {
    const { item, status } = useSelector(state => state.product)
    // console.log(item);
    // console.log(status);
    const history = useHistory()
    const dispatch = useDispatch()
    const toCart = (item) => {
        dispatch(addToCart(item))
        history.push('/shopcart')
    }
    return (
        <>
            {status === 'pending' ? <Loading><h2>Loading ...</h2></Loading> :
                <div className="back">
                    <Link to='/'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Link>
                    <DetailCart className="detail-container">
                        <div className="img-container">
                            <img src={item.image} alt='img'></img>
                        </div>
                        <div className="detail-children">
                            <p>{item.description}</p>
                            <p className="price">${item.price}</p>
                            <button onClick={() => toCart(item)}>Add to Cart</button>
                        </div>
                    </DetailCart>
                </div>
            }
        </>

    );
}

const DetailCart = styled('div')`
    margin-top: 1rem;
    padding: 0 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    user-select: none;

    .detail-children {
        margin: 1rem 10rem 0rem 10rem;
        padding: 0.5rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.5);;

        .price {
            font-size: 1.5rem;
            color: blue;
        }

        p {
            text-align: justify;
            padding: 0.5rem;
            /* font-size: 1rem; */
            font-weight: bold;
        }
        button {
            margin-left: 0.5rem;
            border: none;
            padding: 0.5rem;
            font-size: 1rem;
            transition: all 0.5s ease-in-out;
            user-select: none;
            cursor: pointer;
            background: #ff6767;
            color: black;

            &:hover {
             background: black;
            color: #ff6767;
            }
        }
    }

    .img-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        height: 250px;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Loading = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
`

export default Cart;