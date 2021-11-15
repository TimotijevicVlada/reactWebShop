import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const { products, totalQuantity, totalPrice } = useSelector(
    (state) => state.CartReducer
  );
  //console.log(products) //Dobijamo objekat koji smo kliknuli na add to cart
  const dispatch = useDispatch();
  const purchaseProducts = () => {
    alert("Thank you for buying our products!")
  }

  return (
    <div className="cart-container">
      <h3 className="cart-title">Your cart</h3>
      <div className="cart-products">
        <div className="cart-left-side">
          <div className="cart-heading">
            <div>Picture</div>
            <div>Name</div>
            <div>Price</div>
            <div>Inc/Dec</div>
            <div className="total_item_price">Total price</div>
            <div>Remove</div>
          </div>
          <div className="cart-display-products">
            {products.map((item) => (
              <div className="cart-products-wrapper" key={item.id}>
                <div className="cart-image">
                  <img src={`/images/${item.image}`} alt={item.name} />
                </div>
                <div className="cart-name">
                  <div>{item.name}</div>
                </div>
                <div className="cart-price">
                  <div>${item.discountPrice}</div>
                </div>
                <div>
                  <div className="cart_inc_dec">
                    <span
                      className="dec"
                      onClick={() =>
                        dispatch({ type: "DEC", payload: item.id })
                      }
                    >
                      <i className="fas fa-minus"></i>
                    </span>
                    <span className="quantity">{item.quantity}</span>
                    <span
                      className="inc"
                      onClick={() =>
                        dispatch({ type: "INC", payload: item.id })
                      }
                    >
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>
                </div>
                <div className="item_total_price_num">
                  <div>${(item.discountPrice * item.quantity).toFixed(2)}</div>
                </div>
                <div className="cart-trash">
                  <i
                    className="fas fa-trash"
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: item.id })
                    }
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-summary">
          <h2>Summary</h2>
          <div className="summary-display">
            <div className="summary-total">Total items: {totalQuantity}</div>
            <div className="summary-price">Total price: ${totalPrice.toFixed(2)}</div>
            <div onClick={purchaseProducts} className="buy-btn">BUY</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
