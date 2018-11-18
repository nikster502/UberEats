import products from "../products";

const initialProducts = JSON.parse(products);
console.log(initialProducts)
export default function listProdus(state = initialProducts,action) {
    if (action.type === 'ADD_PRODUCT'){
        return[
            ...state,
            action.payload

        ];
    }
    return state;
}
