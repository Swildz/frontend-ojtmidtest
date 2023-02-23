import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    // const [productDetail, setProductDetail] = useState([])
    // let { identifier } = useParams()
    // const getProductDetail = async () => {

    //     let response = await axios.get('https://dummyjson.com/products/${identifier}'+identifier.id);
    //     setProductDetail(response.data)

    // }
    // useEffect(() => {
    //     getProductDetail();
    // }, [identifier])

    return (
        <div>
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
                {/* <tbody>
                    <tr>
                        <td>{productDetail.products.id}</td>
                        <td>{productDetail.products.title}</td>
                        <td>{productDetail.products.description}</td>
                        <td>{productDetail.products.price}</td>
                        <td>{productDetail.products.description}</td>
                        <td>{productDetail.products.discountPercentage}</td>
                        <td>{productDetail.products.rating}</td>
                        <td>{productDetail.products.stock}</td>
                        <td>{productDetail.products.brand}</td>
                        <td>{productDetail.products.category}</td>
                        <td>{productDetail.products.thumbnail}</td>
                        <td>{productDetail.products.images}</td>
                    </tr>

                </tbody> */}
            </Table>
        </div>
    )
}

export default ProductDetail;