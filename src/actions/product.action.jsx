import axios from "axios";

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT"
export const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT"

export const getListProduct = () => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_LIST_PRODUCT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        //get Api
        axios({
            method: "GET",
            url: "https://dummyjson.com/products",
            timeout: 120000,
        })
            .then((response) => {
                //berhasi get api
                dispatch({
                    type: GET_LIST_PRODUCT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                //gagal get api
                dispatch({
                    type: GET_LIST_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const getDetaiProduct = (data) => {
    return (dispatch) => {
        //loading
        dispatch({
            type: GET_DETAIL_PRODUCT,
            payload: {
                loading: true,
                data: data,
                errorMessage: false,
            },
        });

        //get Api
        axios({
            method: "GET",
            url: "https://dummyjson.com/products/"+data.id,
            timeout: 120000,
            data:data
        })
            .then((response) => {
                //berhasi get api
                dispatch({
                    type: GET_DETAIL_PRODUCT,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                //gagal get api
                dispatch({
                    type: GET_DETAIL_PRODUCT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};