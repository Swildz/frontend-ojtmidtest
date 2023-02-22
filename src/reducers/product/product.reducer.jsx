import { GET_DETAIL_PRODUCT, GET_LIST_PRODUCT } from "../../actions/product.action";

const initialState = {
    getListProductResult: false,
    getListProductLoading: false,
    getListProductError: false,
 
    getDetailProductResult: false,
    getDetailProductLoading: false,
    getDetailProductError: false,
}

const product = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIST_PRODUCT:
            console.log("5. Tempat Masuk Reducer", action);
            return {
                ...state,
                getListProductResult: action.payload.data,
                getListProductLoading: action.payload.loading,
                getListProductError: action.payload.errorMessage,
            };
        case GET_DETAIL_PRODUCT:
            return {
                ...state,
                getDetailProductResult: action.payload.data,
                getDetailProductLoading: action.payload.loading,
                getDetailProductError: action.payload.errorMessage,
            };
        default:
            return state;
    }
};

export default product;