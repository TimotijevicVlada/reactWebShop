const initState = {
    products: [
        {id: 1, name: "t-shirt_1", image: "t-shirt_1.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 2, name: "t-shirt_2", image: "t-shirt_2.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 3, name: "t-shirt_3", image: "t-shirt_3.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 4, name: "t-shirt_4", image: "t-shirt_4.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 5, name: "t-shirt_5", image: "t-shirt_5.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 6, name: "t-shirt_6", image: "t-shirt_6.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 7, name: "t-shirt_7", image: "t-shirt_7.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 8, name: "t-shirt_8", image: "t-shirt_8.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 9, name: "t-shirt_9", image: "t-shirt_9.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 10, name: "t-shirt_10", image: "t-shirt_10.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 11, name: "t-shirt_11", image: "t-shirt_11.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 12, name: "t-shirt_12", image: "t-shirt_12.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 13, name: "t-shirt_13", image: "t-shirt_13.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 14, name: "t-shirt_14", image: "t-shirt_14.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 15, name: "t-shirt_15", image: "t-shirt_15.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 16, name: "t-shirt_16", image: "t-shirt_16.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 17, name: "t-shirt_17", image: "t-shirt_17.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 18, name: "t-shirt_18", image: "t-shirt_18.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 19, name: "t-shirt_19", image: "t-shirt_19.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
        {id: 20, name: "t-shirt_20", image: "t-shirt_20.webp", price: 20, discount: 2, discountPrice: 20 - 20 * 0.02, quantity: 1, desc: "Lorem ipsum dolor sit amet"},
    ]
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type) {
        default:
        return state;
    }
}
 
export default ProductsReducer;