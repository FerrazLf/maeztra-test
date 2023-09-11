import SearchBar from "../SearchBar/SearchBar";
import Imagem from "./../../assets/logo-maeztra-novo.png";
import "./header.css";

function Header() {
  return (
    <>
      <div className="title-ad-container">
        <p  className="title-ad" >Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </div>
      <div className="header-container">
        <div>
          <img src={Imagem} alt="" />
        </div>
        <div>
          <SearchBar />
        </div>
        <a href="/">
          <p className="header-title">Minha Conta</p>
        </a>
        <a href="/">
          <p className="header-title">Minha Conta</p>
        </a>
        <a href="/">
          <p className="header-title">Meu carrinho</p>
        </a>
      </div>
    </>
  );
}

export default Header;
