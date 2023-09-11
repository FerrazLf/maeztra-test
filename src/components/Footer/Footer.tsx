import FacebookIcon from "../../assets/face";
import InstagramIcon from "../../assets/instragram";
import LinkedinIcon from "../../assets/linkedIn";
import MasterIcon from "../../assets/master";
import VisaIcon from "../../assets/visa";
import YoutubeIcon from "../../assets/youtuber";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-infos-container">
          <h1 className="footer-title">Infomações</h1>
          <span className="footer-infos">
            <a href="/">
              <p>Quem Somos</p>
            </a>

            <a href="/">
              <p>Prazo de Envio</p>
            </a>

            <a href="/">
              <p>Trocas e Devoluções</p>
            </a>

            <a href="/">
              <p>Promoções e Cupons</p>
            </a>
          </span>
        </div>
        <div className="footer-infos-container">
          <h1 className="footer-title">Minha Conta</h1>
          <span className="footer-infos">
            <a href="/">
              <p>Minha Conta</p>
            </a>

            <a href="/">
              <p>Meus Pedidos</p>
            </a>

            <a href="/">
              <p>Cadastre-se</p>
            </a>
          </span>
        </div>
        <div className="footer-infos-container">
          <h1 className="footer-title">Onde nos encontrar</h1>
          <span className="footer-infos">
            <a href="/">
              <p>Lojas</p>
            </a>
            <a href="/">
              <p>Endereço</p>
            </a>
          </span>
        </div>
      </div>
      <div className="container-footer-icon">
        <span className="social-icon">
          <div className="footer-icon">
            <FacebookIcon />
          </div>
          <div className="footer-icon">
            <LinkedinIcon />
          </div>
          <div className="footer-icon">
            <InstagramIcon />
          </div>
          <div className="footer-icon">
            <YoutubeIcon />
          </div>
        </span>
        <span className="payments-methods">
          <div className="footer-icon">
            <VisaIcon />
          </div>

          <div className="footer-icon">
            <MasterIcon />
          </div>

          <div className="footer-icon">
            <VisaIcon />
          </div>

          <div className="footer-icon">
            <MasterIcon />
          </div>
        </span>
        <span className="dev-icon">
          <p className="title-dev">Powered by</p>

          <p className="title-dev-2">Developed by</p>
        </span>
      </div>
    </>
  );
}

export default Footer;
