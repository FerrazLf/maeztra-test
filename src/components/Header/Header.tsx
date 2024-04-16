import "./header.css";
import SearchBar from "../SearchBar/SearchBar";
import logo from "./../../assets/logo-maeztra-novo.png";
import searchIcon from "./../../assets/search-icon.svg";
import menuIcon from "./../../assets/menuIcon.svg";
import bagIcon from "./../../assets/bagIcon.svg";

function Header() {
  return (
    <header>
      <div className="top-bar__container">
        <p className="top-bar__title">
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </p>
      </div>

      <div className="header-container header-container__mobile">
        <div className="header-container__mobile--left">
          <div className="header-container__menu-icon">
            <img src={menuIcon} width={24} height={24} alt="Menu icon"  />
          </div>
          <div className="header-container__logo">
            <img src={logo} width={110} height={12} alt="Logo"  />
          </div>
        </div>

        <div className="header-container__mobile--right">
          <div className="header-container__search-icon">
            <img src={searchIcon} width={24} height={24}  alt="Search icon" />
          </div>
          <div className="header-container__cart-icon">
            <img src={bagIcon} width={24} height={24}  alt="Cart icon" />
          </div>
        </div>
      </div>
      
      <div className="header-container header-container__desktop">
        <div className="header-container__logo">
          <img src={logo} width={147} height={18} alt="Logo"  />
        </div>

        <div className="header-container__search-bar">
          <SearchBar />
        </div>

        <div className="header-container__links">
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
      </div>
    </header>
  );
}

export default Header;
