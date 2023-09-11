import Planet from "./../../assets/planet.png"
import Stock from "./../../assets/stock.png"
import Replacement from "./../../assets/replacement.png";
import Promotion from "./../../assets/promotion.png"
import Shipping from "./../../assets/shipping.png"

import "./infoSite.css";

function InfoSite() {
  return (
    <>
      <h1 className="title-site">Por que comprar na Maeztra?</h1>
      <div className="info-container">
        <span className="box-info">
          <img className="Icon-info" src={Planet} alt="" />
          <p className="title-box">Produtos importados</p>
          <p className="subtitle-box">Produto de Alta Qualidade</p>
        </span>
        <span className="box-info">
        <img className="Icon-info" src={Stock} alt="" />
          <p className="title-box">Estoque no Brazil</p>
          <p className="subtitle-box">Produtos mais perto de você!</p>
        </span>
        <span className="box-info">
        <img className="Icon-info" src={Replacement} alt="" />
          <p className="title-box">Trocas Garantidas</p>
          <p className="subtitle-box">
            Trocas em até 48 horas, vejas as regras
          </p>
        </span>
        <span className="box-info">
        <img className="Icon-info" src={Promotion} alt="" />
          <p className="title-box">Ganhe 5% off</p>
          <p className="subtitle-box">Pagando à vista no Cartão</p>
        </span>
        <span className="box-info">
        <img className="Icon-info" src={Shipping} alt="" />
          <p className="title-box"> Frete Grátis</p>
          <p className="subtitle-box">Em compras acima de R$ 499,00</p>
        </span>
      </div>
    </>
  );
}

export default InfoSite;
