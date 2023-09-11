import Forever21 from "../../assets/forever21.png";
import Melissa from "../../assets/melissa.png";
import Comma from "../../assets/comma.png";
import Zara from "../../assets/zara.png";
import "./partnersGrid.css";

function PartnersGrid() {
  return (
    <>
      <h1 className="title-partner">Marcas Parceiras</h1>
      <div className="partners-container">
        <span>
          <img src={Comma} alt="" />
        </span>
        <span>
          <img src={Melissa} alt="" />
        </span>
        <span>
          <img src={Forever21} />
        </span>
        <span>
          <img src={Zara} />
        </span>
      </div>
    </>
  );
}

export default PartnersGrid;
