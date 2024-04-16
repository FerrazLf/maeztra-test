import { useState } from "react";
import modalImage from "./../../assets/modalImage.png";
import iconModal from "./../../assets/iconModal.svg";
import "./Modal.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className="modal__container">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <picture className="modal__image">
              <source media="(min-width: 767px)" srcSet={modalImage} />

              <img src={modalImage} alt="Banner" />
            </picture>
            <div className="modal__content">
              <img width={28} height={28} src={iconModal} alt="icon" />
              <p className="modal_title">Bem Vindo à MAEZTRA</p>
              <p className="modal__subtitle">
                Receba em Primeira mão desconto e ofertas exclusivas
              </p>
              <input
                className="modal__input"
                type="email"
                placeholder="Digite seu e-mail"
              />
              <button className="modal__button">Enviar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
