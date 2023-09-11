import DressIcon from "../../assets/dress";
import "./submenu.css";

function Submenu() {
  return (
    <div className="submenu-container">
      <a href="/">
        <p className="main-title">
          <DressIcon />   Novidades
        </p>
      </a>
      <a href="/">
        <p className="submenu-title">Vestidos</p>
      </a>
      <a href="/">
        <p className="submenu-title">Roupas</p>
      </a>
      <a href="/">
        <p className="submenu-title">Sapatos</p>
      </a>
      <a href="/">
        <p className="submenu-title">Lingerie</p>
      </a>
      <a href="/">
        <p className="submenu-title">Acessórios</p>
      </a>
      <a href="/">
        <p className="submenu-title"> OUTLET</p>
      </a>
    </div>
  );
}

export default Submenu;
