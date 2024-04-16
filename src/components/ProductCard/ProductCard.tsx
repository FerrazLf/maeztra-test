import "./productCard.css";
import { Carousel } from "nuka-carousel";

import producuCardImage from "./../../assets/productCard.png";

const productArray = [
  {
    id: 1,
    imgSrc: producuCardImage,
    price: 500.0,
    title: "Ruched Rose Print Mini Skirt",
    description:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
  },
  {
    id: 2,
    imgSrc: producuCardImage,
    price: 320.2,
    title: "Faux Suede Mini Skirt",
    description:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure.",
    colors: ["#EAE9E5", "#D84E4B", "#CFC9B0", "#1C1A19"],
  },
  {
    id: 3,
    imgSrc: producuCardImage,
    price: 500.0,
    title: "Ruched Rose Print Mini Skirt",
    description:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
  },
  {
    id: 4,
    imgSrc: producuCardImage,
    price: 320.2,
    title: "Faux Suede Mini Skirt",
    description:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure.",
    colors: ["#EAE9E5", "#D84E4B", "#CFC9B0", "#1C1A19"],
  },
  {
    id: 5,
    imgSrc: producuCardImage,
    price: 500.0,
    title: "Ruched Rose Print Mini Skirt",
    description:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure.",
    colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
  },
  {
    id: 5,
    imgSrc: producuCardImage,
    price: 320.2,
    title: "Faux Suede Mini Skirt",
    description:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure.",
    colors: ["#EAE9E5", "#D84E4B", "#CFC9B0", "#1C1A19"],
  },
  {
    id: 6,
    imgSrc: producuCardImage,
    price: 320.2,
    title: "Ruched Rose Print Mini Skirt",
    description:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure.",
    colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
  },
  {
    id: 7,
    imgSrc: producuCardImage,
    price: 500.0,
    title: "Faux Suede Mini Skirt",
    description:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure.",
    colors: ["#EAE9E5", "#D84E4B", "#CFC9B0", "#1C1A19"],
  },
  {
    id: 8,
    imgSrc: producuCardImage,
    price: 320.2,
    title: "Ruched Rose Print Mini Skirt",
    description:
      "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure.",
    colors: ["#DEAC71", "#D37164", "#6497D3", "#3C3B79"],
  },
];

function ProductCard() {
  return (
    <div className="product-card__container">
      <h1 className="product-card__text">As Mais Pedidas</h1>
      <Carousel showArrows="always" wrapMode="wrap" scrollDistance={310}>
        {productArray.map((item) => (
          <div key={item.id} className="product-card__item">
            <div className="product-card__image">
              <img src={item.imgSrc} />
            </div>
            <div className="product-card__colors">
              {item.colors.map((color) => (
                <div
                  key={color}
                  className="product-card__color"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>

            <div className="product-card__price">
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.price)}
            </div>

            <div className="product-card__title">
              <h3>{item.title}</h3>
            </div>

            <div className="product-card__description">
              <h3>{item.description}</h3>
            </div>

            <button className="product-card__button">Adicionar</button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductCard;
