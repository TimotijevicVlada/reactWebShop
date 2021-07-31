import React, { isValidElement } from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const { products } = useSelector((state) => state.CartReducer);
  //console.log(products) //Dobijamo objekat koji smo kliknuli na add to cart
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
            <div>Total price</div>
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
                  <div>
                    <span className="dec">
                      <i className="fas fa-minus"></i>
                    </span>
                    <span className="quantity">{item.quantity}</span>
                    <span className="inc">
                      <i className="fas fa-plus"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <div>${(item.discountPrice * item.quantity).toFixed(2)}</div>
                </div>
                <div className="cart-trash">
                  <i class="fas fa-trash"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cart-summary">summary</div>
      </div>
    </div>
  );
};

export default Cart;
