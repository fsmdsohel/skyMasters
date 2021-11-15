import { Col, Container, Row } from "react-bootstrap";
import "./ProductForm.css";

const ProductForm = ({ data }) => {
  const { handleInput, carData, handleAddProduct, edit } = data;
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <form className="mx-0 mx-lg-5 mx-md-4 add_product_form">
          <h2 className="text-center my-3">{edit ? "Edit" : "Add"} Product</h2>
          <Row>
            <Col lg="12">
              <div className="input_item">
                <label htmlFor="car-name">Name</label>
                <input
                  name="title"
                  onChange={handleInput}
                  value={carData.title}
                  type="text"
                  id="car-name"
                  placeholder="Product Name"
                />
              </div>
            </Col>
            <Col lg="12">
              <div className="input_item">
                <label htmlFor="car-amount">Product Price</label>
                <input
                  name="price"
                  onChange={handleInput}
                  value={carData.price}
                  id="car-amout"
                  type="number"
                  placeholder="Price"
                />
              </div>
            </Col>
            <Col lg="12">
              <div className="input_item">
                <label htmlFor="car-photo">Product Photo</label>
                <input
                  name="image"
                  onChange={handleInput}
                  value={carData.image}
                  id="car-photo"
                  type="text"
                  placeholder="https://www.example.com/imageUrl.extension"
                />
              </div>
            </Col>
            <Col lg="12">
              <div className="input_item">
                <label htmlFor="car-details">Product Details</label>
                <textarea
                  name="desc"
                  onChange={handleInput}
                  value={carData.desc}
                  rows="4"
                  id="car-details"
                  type="date"
                  placeholder="Write Something About This Product..."
                ></textarea>
              </div>
            </Col>
            <Col lg="12" className="my-4 d-flex justify-content-center ">
              <button onClick={handleAddProduct} className="btn_round fs-6">
                {edit ? "Edit" : "Add"} Product
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default ProductForm;
