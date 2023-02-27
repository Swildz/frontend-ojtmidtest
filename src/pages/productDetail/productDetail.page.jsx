import { height, width } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [productDetail, setProductDetail] = useState([]);
  const { identifier } = useParams();
  const getProductDetail = async () => {
    let response = await axios.get(
      `http://localhost:3001/product/${identifier}`
    );
    setProductDetail(response.data);
  };
  useEffect(() => {
    getProductDetail();
  }, [identifier]);

  if (!productDetail) {
    return <div>Loading...</div>;
  }
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
        <tbody>
          <tr>
            <td>{productDetail.id}</td>
            <td>{productDetail.title}</td>
            <td>{productDetail.description}</td>
            <td>{productDetail.price}</td>
            <td>{productDetail.discount_percentage}</td>
            <td>{productDetail.rating}</td>
            <td>{productDetail.stock}</td>
            <td>{productDetail.brand}</td>
            <td>{productDetail.category}</td>
            <td>
              <img src={productDetail.thumbnail} width="50px" height="50px" />
            </td>
            <td>
              <img src={productDetail.images} width="50px" height="50px" />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ProductDetail;
