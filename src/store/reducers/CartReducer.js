const initState = {
    products: [],
    totalPrice: 0,
    totalQuantity: 0
}

const CartReducer = (state = initState, action) => {
    switch(action.type) {
        case "ADD_TO_CART":
        //console.log(action.payload.product.id) //Dobijamo id od svakog pojedinacnog proizvoda koji kliknemo 
        const {product, quantity} = action.payload;
        //console.log(product.id, quantity)   //Dobijamo id od producta kao i trenutnu kolicinu tog proizvoda
        const check = state.products.find(product => product.id === action.payload.product.id); 
        if(check) {
            return state;
        }else {
            const Tprice = state.totalPrice + product.discountPrice * quantity;
            //console.log(Tprice)  //Dobijamo ukupnu cenu
            const Tqunatities = state.totalQuantity + quantity;
            product.quantity = quantity;
            return {
                ...state, products: [...state.products, product], totalPrice: Tprice, totalQuantity: Tqunatities
            }
        }
        
        default: 
        return state;
    }
}

export default CartReducer;