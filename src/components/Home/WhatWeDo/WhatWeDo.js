// Import Swiper React components
import { Col, Container, Row } from "react-bootstrap";
// import Swiper core and required modules
import SwiperCore, {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import slider1 from "../../../assests/images/slider/slider1.png";
import slider2 from "../../../assests/images/slider/slider2.png";
import slider3 from "../../../assests/images/slider/slider3.png";
import "./WhatWeDo.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const data = [
  {
    img: slider1,
    title: "What we do",
    header: "Best quelity drone",
    desc: "Competitive Prices on More Than 100 Million Items. Discover Products Online Now! Promotions on clothing, electronics, sports and more. Check out all the deals! Up to 40% discount. Safe Payment. Buyer Protection. Delivery track online. Best of quality.",
  },
  {
    img: slider2,
    title: "What we do",
    header: "Best quelity drone",
    desc: "Factory Direct Sales, Enjoy Direct Shipping from Local Warehouse. Order Now! Production Monitoring. Trade Assurance. Logistics Service. Most Popular. Types: Machinery, Apparel.",
  },
  {
    img: slider3,
    title: "What we do",
    header: "Best quelity drone",
    desc: "With M.A.C Liptensity Lipstick, you get full coverage, rich color with nice sheen said to last up to eight hours. It contains extra amounts of pigments for color overload and has a gel base designed to melt on contact and keep the shade true to color",
  },
];

const services = [
  {
    title: "Latest Information",
    icon: <i className="fas fa-sync-alt fs-1"></i>,
    desc: "Get the latest information on your product trade-in value today.",
  },
  {
    title: "Membership Card",
    icon: <i className="fas fa-tachometer-alt fs-1"></i>,
    desc: "See where you stand on your journey to owning a new product",
  },
  {
    title: "Apply for Financing",
    icon: <i className="fas fa-dollar-sign fs-1"></i>,
    desc: "Own a new product of your dreams with Sorum Financial Services.",
  },
  {
    title: "24 Hours Service",
    icon: <i className="fas fa-history fs-1"></i>,
    desc: "Receive the latest offers, releases, and news from Sorum.",
  },
];

export default function WhatWeDo() {
  return (
    <>
      <div>
        <Container className="py-5 text-white">
          <Row className="mb-4">
            {services.map((item, ind) => {
              const { title, icon, desc } = item;
              return (
                <Col
                  className="service_header"
                  lg="3"
                  md="6"
                  sm="12"
                  key={ind + "osndf"}
                >
                  <div className="d-flex align-items-center my-2">
                    {icon}
                    <h5 className="m-0 ms-3 fw-bold">{title}</h5>
                  </div>
                  <p>{desc}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className="what_we_do">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
          {data.map((item, ind) => {
            const { title, header, desc, img } = item;
            return (
              <SwiperSlide key={ind + "osdnf"}>
                <Container>
                  <Row className="d-flex align-items-center">
                    <Col lg="6">
                      <h6>{title}</h6>
                      <h2
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        {header}
                      </h2>
                      <p>{desc}</p>
                      <button className="btn_round fs-6">SHOP NOW</button>
                    </Col>
                    <Col lg="6">
                      <img className="img-fluid px-5 h-auto" src={img} alt="" />
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
