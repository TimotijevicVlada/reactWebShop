import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Details = () => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => {
       if(quantity >= 20) {
           setQuantity(20);
           alert("Maximum number of products is 20");
       }else {
           setQuantity(quantity + 1);
       }
    }
    const decreaseQuantity = () => {
        if(quantity <= 1) {
            setQuantity(1);
        }else {
            setQuantity(quantity - 1);
        }
    }
    const AddToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: {product, quantity}
        })
    }
    const id = useParams().id;  //Dobijam broj id za svaki kliknuti element
    //console.log(id);
    const dispatch = useDispatch();
    const {product} = useSelector(state => state.ProductsReducer);
    //console.log(product);   //Dobijam pojedinacni product koji kliknem
    useEffect(() => {
        dispatch({type: "PRODUCT", id})
    }, [id])
    return (
        <div className="details-container">
            <div className="details-img">
                <img src={`/images/${product.image}`} alt={product.name}/>
            </div>
            <div className="details-right-info">
                <div className="details-name">
                    <h1>{product.name}</h1>
                </div>
                <div className="details-price">
                    <span className="details-actual-price">${product.price}</span> <span className="details-disc-price">${product.discountPrice}</span> 
                </div>
                <div className="details-info">
                    <span className="dec" onClick={decreaseQuantity}><i className="fas fa-minus"></i></span>
                    <span className="quantity">{quantity}</span>
                    <span className="inc" onClick={increaseQuantity}><i className="fas fa-plus"></i></span>
                    <button className="details-btn" onClick={AddToCart}>add to cart</button>
                </div>
                <div className="details-description">
                    <h2>Details</h2>
                    {product.desc}
                </div>
            </div>
        </div>
    )
}

export default Details;
