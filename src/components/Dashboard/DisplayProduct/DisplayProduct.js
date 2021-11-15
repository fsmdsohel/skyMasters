import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import carPhoto from "../../../assests/images/about.svg";

const DisplayProduct = () => {
  const [product, setProduct] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const url = `/cars/${id}`;
    axios.get(url).then((res) => {
      setProduct(res.data);
    });
  }, [id]);
  return (
    <Container>
      <Row>
        <Col lg="6">
          <div className="card_wrapper m-3">
            <img
              className="img-fluid"
              style={{
                height: "auto",
              }}
              src={product.image}
              alt=""
            />
            <div className="card_content my-4">
              <h5 className="fw-bold">{product.title}</h5>
              <p className="text-dark">{product.desc}</p>
              <div className="d-flex  align-items-center">
                <h5 style={{ marginBottom: 0 }}>Price {"$" + product.price}</h5>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="6">
          <img
            className="img-fluid p-2 p-lg-5"
            style={{
              height: "auto",
            }}
            src={carPhoto}
            alt=""
          />
          <button
            onClick={() => history.goBack()}
            className="btn_round mx-auto fs-6"
          >
            Back to previous
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayProduct;
