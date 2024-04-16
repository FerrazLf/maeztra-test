import "./home.css";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";
import InfoSite from "../../components/InfoSite/InfoSite";
import Newsletter from "../../components/Newsletter/Newsletter";
import PartnersGrid from "../../components/ParnersGrid/PartnersGrid";
import ProductCard from "../../components/ProductCard/ProductCard";
import BannerGrid from "../../components/BannerGrid/BannerGrid";
import Submenu from "../../components/Submenu/Submenu";
import Modal from "../../components/Modal/Modal";

function Home() {
  return (
    <>
      <Modal />
      <Header />
      <div className="home">
        <Submenu />
        <BannerGrid />
        <div className="home__content">
          <InfoSite />
          <PartnersGrid />
          <ProductCard />
          <InfoCard />
        </div>
        <Newsletter />
      </div>
      <Footer />
    </>
  );
}

export default Home;
