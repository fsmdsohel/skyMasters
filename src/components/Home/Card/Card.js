import { Col } from "react-bootstrap";

const Card = ({ data, handleBookNow }) => {
  const { image, title, desc, price } = data;
  return (
    <Col lg="4" className={data?.btnHide ? "col-lg-6" : "mb-4"}>
      <div className="card_wrapper m-3">
        <img
          className="img-fluid"
          style={{
            borderRadius: "8px",
          }}
          src={image}
          alt=""
        />
        <div className="card_content my-4">
          <h5 className="fw-bold">{title}</h5>
          <p
            style={{
              color: "var(--main-text-color)",
              fontWeight: 500,
            }}
          >
            {desc}
          </p>
          <div className="d-flex  align-items-center">
            {!data?.btnHide && (
              <button
                onClick={() => handleBookNow(data)}
                className="btn_round"
                style={{
                  minHeight: "40px",
                  width: "140px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
                }}
              >
                Book Now
              </button>
            )}

            {!data?.btnHide ? (
              <h5 style={{ marginBottom: 0, marginLeft: "20px" }}>
                Price {"$" + price}
              </h5>
            ) : (
              <h5 style={{ marginBottom: 0 }}>Price {"$" + price}</h5>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Card;
