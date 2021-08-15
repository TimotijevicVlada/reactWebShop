import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const products = useSelector((state) => state.ProductsReducer.products);
  //console.log(products)

  return (
    <div>
      <div className="cover_pic"></div>
      <div className="product_title">Shirts</div>
      <div className="home_container">
        {products.map((elem) => (
          <div className="product-container" key={elem.id}>
            <div className="product">
              <div className="product-img">
                <Link to={`/details/${elem.id}`}>
                  <img src={`images/${elem.image}`} alt="image name" />
                </Link>
              </div>
              <div className="product-name">
                <h2>{elem.name}</h2>
              </div>
              <div className="price-container">
                <div className="price">${elem.price}</div>
                <div>${elem.discountPrice}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
