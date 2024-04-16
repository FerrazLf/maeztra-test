import forever21 from "../../assets/forever21.png";
import melissa from "../../assets/melissa.png";
import comma from "../../assets/comma.png";
import zara from "../../assets/zara.png";
import ann from "../../assets/ann.png"
import "./partnersGrid.css";

function PartnersGrid() {
  return (
    <>
      <h1 className="partners-grid__title">Marcas Parceiras</h1>
      <div className="partners-grid__container">
        <img className="partners-grid__image" src={comma} alt="" />

        <img className="partners-grid__image" src={melissa} alt="" />

        <img src={forever21} />

        <img className="partners-grid__image" src={zara} />

        <img className="partners-grid__image" src={ann} />
      </div>
    </>
  );
}

export default PartnersGrid;
