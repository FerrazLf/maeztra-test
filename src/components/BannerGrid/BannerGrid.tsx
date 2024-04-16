import Bannerfull from "./../../assets/bannerfull.png";
import BannerMobile from "./../../assets/bannerMobile.png";
import { Carousel } from "nuka-carousel";
import "./bannerGrid.css";
function BannerGrid() {
  return (
    <div className="main-container">
      <p className="title-banner">Promoções de outono</p>
      <p className="subtitle-banner">
        Confiras os melhores looks para combinar com você nesse Outono
      </p>
      <button className="button-banner">Conferir</button>
      <div className="banner-grid__carousel">
        <Carousel autoplay showArrows="always" wrapMode="wrap">
          <picture className="banner-grid__image">
            <source media="(max-width: 767px)" srcSet={BannerMobile} />
            <source media="(min-width: 768px)" srcSet={Bannerfull} />
            <img src={Bannerfull} alt="Banner" />
          </picture>
          <picture>
            <source media="(max-width: 767px)" srcSet={BannerMobile} />
            <source media="(min-width: 768px)" srcSet={Bannerfull} />
            <img src={Bannerfull} alt="Banner" />
          </picture>
          <picture>
            <source media="(max-width: 767px)" srcSet={BannerMobile} />
            <source media="(min-width: 768px)" srcSet={Bannerfull} />
            <img src={Bannerfull} alt="Banner" />
          </picture>
        </Carousel>
      </div>
    </div>
  );
}

export default BannerGrid;
