import axios from "axios";

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT"
export const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT"

export const getListProduct = () => {
    console.log("2. Masuk Action");
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
            url: "http://localhost:3001/product/",
            timeout: 120000,
        })
            .then((response) => {
                //berhasi get api
                console.log("3. Berhasil ambil data", response);
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
                console.log("3. Gagal ambil data" , error);
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
            url: "http://localhost:3001/product/"+data.id,
            timeout: 120000,
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