import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ProductList = (props) => {
  const [products, setProduct] = useState([]);
  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3001/product/");
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="py-5">
      <div className="container">
        <div className="row jusify-content-center">
          <div className="col-md-8">
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
              {products.products &&
                  products.products.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td>{product.id}</td>
                        <td>
                          <NavLink to={`/productDetail/${product.id}`}>
                            {product.title}
                          </NavLink>
                        </td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.discountPercentage}</td>
                        <td>{product.rating}</td>
                        <td>{product.stock}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>
                          <img
                            src={product.thumbnail}
                            width="50px"
                            height="50px"
                          />
                        </td>
                        <td>
                          <img
                            src={product.images}
                            width="50px"
                            height="50px"
                          />
                        </td>
                      </tr>
                    );
                  })}
                {/* {products.products &&
                  products.products.map((product, index) => {
                    return (
                      <tr key={index}>
                        <td>{product.id}</td>
                        <td>
                          <NavLink to={`/productDetail/${product.id}`}>
                            {product.title}
                          </NavLink>
                        </td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>{product.discountPercentage}</td>
                        <td>{product.rating}</td>
                        <td>{product.stock}</td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>
                          <img
                            src={product.thumbnail}
                            width="50px"
                            height="50px"
                          />
                        </td>
                        <td>
                          <img
                            src={product.images}
                            width="50px"
                            height="50px"
                          />
                        </td>
                      </tr>
                    );
                  })} */}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
