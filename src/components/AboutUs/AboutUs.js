import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import aboutPhoto from "../../assests/images/about.svg";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <Container className="mb-5">
        <Row
          style={{
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Col lg="6" md="12">
            <img
              src={aboutPhoto}
              className="img-fluid"
              style={{
                height: "auto",
              }}
              alt=""
            />
          </Col>
          <Col lg="6" md="12">
            <p
              className="fw-bold mb-2"
              style={{
                color: "var(--main-text-color)",
              }}
            >
              WELCOME TO MacLip
            </p>
            <h3 className="fw-bold mb-4">About Us</h3>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              Lipstick: the iconic product that made MAC famous. Shade, define,
              and accentuate the lips with hundreds of hues in high-fashion
              textures. Find Info On Health Questions. Your Health Journey
              Starts Today. Search Now. Trustworthy Sources. Browse Multiple
              Sources. Find Fast Results. Find Info Instantly. Types:
              Trustworthy Sources, Find Fast Search Results, Reliable
              Information.
              <br />
              <br />
              The top spot was unsurprisingly cinched by a shade popularized by
              the Kardashian Jenner clan, MAC Velvet Teddy. According to the
              e-tailer, this lipstick is not only the most popular MAC Lipstick
              shade, it's also the world's favourite beauty product overall.
            </p>
            <Link className="btn_round fs-6 my-4" to="/contact">
              About More
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
