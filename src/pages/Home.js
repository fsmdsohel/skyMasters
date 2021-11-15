import Banner from "../components/Home/Banner/Banner";
import BuyAndSell from "../components/Home/BuyAndSell/BuyAndSell";
import Footer from "../components/Home/Footer/Footer";
import Review from "../components/Home/Review/Review";
import WhatWeDo from "../components/Home/WhatWeDo/WhatWeDo";
import Navigation from "../components/shared/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <Banner />
      <WhatWeDo />
      <BuyAndSell />
      <Review />
      <Footer />
    </>
  );
};

export default Home;
