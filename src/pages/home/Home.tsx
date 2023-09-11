import BannerGrid from "../../components/BannerGrid/BannerGrid";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InfoCard from "../../components/InfoCard/InfoCard";
import InfoSite from "../../components/InfoSite/InfoSite";
import Newsletter from "../../components/Newsletter/Newsletter";
import PartnersGrid from "../../components/ParnersGrid/PartnersGrid";
import ProductCard from "../../components/ProductCard/ProductCard";
import Submenu from "../../components/Submenu/Submenu";

function Home() {
  return (
    <>
      <div className="home">
        <div>
          <Header />
        </div>
        <Submenu />
        <div></div>
        <BannerGrid />
        <div>
          <InfoSite />
        </div>
        <div>
          <PartnersGrid />
        </div>
        <ProductCard />
        <div>
          <InfoCard />
        </div>
        <Newsletter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
