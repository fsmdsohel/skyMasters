import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import carPhoto from "../../../assests/images/about.svg";
import Card from "../../Home/Card/Card";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const url = `/order/${id}`;
    axios.get(url).then((res) => {
      setProduct(res.data);
    });
  }, [id]);
  return (
    <Container>
      <Row>
        <Card data={{ ...product, btnHide: true }} />
        <Col lg="6">
          <img
            className="img-fluid p-2 p-lg-5"
            style={{ height: "auto" }}
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

export default ProductDetails;
