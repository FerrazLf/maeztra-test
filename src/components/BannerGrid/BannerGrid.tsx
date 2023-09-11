import Bannerfull from "./../../assets/bannerfull.png";
import Carousel from "nuka-carousel";
import "./bannerGrid.css";
function BannerGrid() {
  return (
    <div className="main-container">
      <p className="title-banner">Promoções de outono</p>
      <p className="subtitle-banner">
        Confiras os melhores looks para combinar com você nesse Outono
      </p>
      <button className="button-banner">Conferir</button>
      <Carousel autoplay={true} wrapAround={true}>
        <img className="image-banner" src={Bannerfull} alt="" />
        <img className="image-banner" src={Bannerfull} alt="" />
        <img className="image-banner" src={Bannerfull} alt="" />
      </Carousel>
    </div>
  );
}

export default BannerGrid;
