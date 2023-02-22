import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getDetaiProduct, getListProduct } from '../../actions/product.action';

function ListProduct() {
    const {
        getListProductResult,
        getListProductLoading,
        getListProductError,
    } = useSelector((state) => state.ProductReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        //panggil action getListProduct
        dispatch(getListProduct());
    }, [dispatch]);
    return (
        <div>
            <h4>List Product</h4>
            {getListProductLoading && <p>Loading...</p>}
            {getListProductError && <p>Error</p>}
            {getListProductResult ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount Percentage</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Brand</th>
                            <th>Category</th>
                            <th>Thumbnail</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getListProductResult.map((product, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.title}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                    <td>{product.description}</td>
                                    <td>{product.discountPercentage}</td>
                                    <td>{product.rating}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.brand}</td>
                                    <td>{product.category}</td>
                                    <td>{product.thumbnail}</td>
                                    <td>{product.images}</td>
                                    <td>
                                        <button
                                            className="btn btn-warning mx-2"
                                            onClick={() => dispatch(getDetaiProduct(product))}
                                        >
                                            Detail
                                        </button>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            ) : getListProductLoading ? (
                <p>Loading...</p>
            ) : (
                <p>{getListProductError ? getListProductError : "Data Kosong"}</p>
            )}
        </div>
    )
}

export default ListProduct;