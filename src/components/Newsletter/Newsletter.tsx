import "./newsletter.css";

function Newsletter() {
  return (
    <>
      <div className="newsletter-container">
        <span>
          <p className="newsletter-title">Recebe Nossa Newsletter</p>
        </span>
        <span>
          <input className="input-newsletter" type="email" placeholder="Digite seu e-mail" />
          <button className="button-newsletter">Enviar</button>
        </span>
      </div>
    </>
  );
}

export default Newsletter;
