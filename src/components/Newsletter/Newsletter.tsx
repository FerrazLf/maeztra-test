import "./newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="newsletter__container">
        <span>
          <p className="newsletter__title">Recebe Nossa Newsletter</p>
        </span>
        <span className="newsletter__content">
          <input className="newsletter__input" type="email" placeholder="Digite seu e-mail" />
          <button className="newsletter__button">Enviar</button>
        </span>
      </div>
    </>
  );
}

export default Newsletter;
