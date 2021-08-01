const initState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const CartReducer = (state = initState, action) => {
  let findProduct;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      //console.log(action.payload.product.id) //Dobijamo id od svakog pojedinacnog proizvoda koji kliknemo
      const { product, quantity } = action.payload;
      //console.log(product.id, quantity)   //Dobijamo id od producta kao i trenutnu kolicinu tog proizvoda
      const check = state.products.find(
        (product) => product.id === action.payload.product.id
      );
      if (check) {
        return state;
      } else {
        const Tprice = state.totalPrice + product.discountPrice * quantity;
        //console.log(Tprice)  //Dobijamo ukupnu cenu
        const Tqunatities = state.totalQuantity + quantity;
        product.quantity = quantity;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: Tprice,
          totalQuantity: Tqunatities,
        };
      }
    case "INC":
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      findProduct.quantity += 1;
      state.products[index] = findProduct;
      return {
        ...state,
        totalPrice: state.totalPrice * findProduct.discountPrice,
        totalQuantity: state.totalQuantity + 1,
      };
    case "DEC":
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
        state.products[index] = findProduct;
        return {
          ...state,
          totalPrice: state.totalPrice - findProduct.discountPrice,
          totalQuantity: state.totalQuantity - 1,
        };
      } else {
        return state;
      }
      case "REMOVE":
        findProduct = state.products.find(
            (product) => product.id === action.payload
          );
          const filtered = state.products.filter(product => product.id !== action.payload);
          return {
              ...state,
              products: filtered,
              totalPrice: state.totalPrice - findProduct.discountPrice * findProduct.quantity,
              totalQuantity: state.totalQuantity - findProduct.quantity
          }
    default:
      return state;
  }
};

export default CartReducer;
