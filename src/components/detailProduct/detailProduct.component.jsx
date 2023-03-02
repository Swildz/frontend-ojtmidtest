import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetaiProduct } from "../../actions/productAction";

function DetailProduct() {
    const { identifier } = useParams();
    const {
        getDetailProductResult,
        getDetailProductLoading,
        getDetailProductError,
    } = useSelector((state) => state.ProductReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        if (identifier)
            getDetaiProduct(identifier)
    }, [dispatch, identifier]);
    return (
        <div>
            <h4>List Product</h4>
            {getDetailProductLoading && <p>Loading...</p>}
            {getDetailProductError && <p>Error</p>}
            {getDetailProductResult ? (
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

                        <tr>
                            <td>{getDetailProductResult.id}</td>
                            <td>{getDetailProductResult.title}</td>
                            <td>{getDetailProductResult.description}</td>
                            <td>{getDetailProductResult.price}</td>
                            <td>{getDetailProductResult.description}</td>
                            <td>{getDetailProductResult.discountPercentage}</td>
                            <td>{getDetailProductResult.rating}</td>
                            <td>{getDetailProductResult.stock}</td>
                            <td>{getDetailProductResult.brand}</td>
                            <td>{getDetailProductResult.category}</td>
                            <td>
                                <img
                                    src={getDetailProductResult.thumbnail}
                                    width="50px"
                                    height="50px"
                                />
                            </td>
                            <td>
                                <img
                                    src={getDetailProductResult.images}
                                    width="50px"
                                    height="50px"
                                />
                            </td>
                        </tr>


                    </tbody>
                </Table>
            ) : getDetailProductResult ? (
                <p>Loading...</p>
            ) : (
                <p>{getDetailProductError ? getDetailProductError : "Data Kosong"}</p>
            )}
        </div>
    );
}

export default DetailProduct