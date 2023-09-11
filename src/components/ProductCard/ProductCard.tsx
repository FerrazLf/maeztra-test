import producuCardImage from "./../../assets/productCard.png";
import "./productCard.css";

const productArray = [
  {
    type: "imagem",
    value: producuCardImage,
    class: "img-card",
  },
  {
    type: "cores",
    value: "",
    class: "colors-card",
  },
  {
    type: "preço",
    value: "R$ 500,00",
    class: "price",
  },
  {
    type: "nome",
    value: "Faux Suede Mini Skirt",
    class: "product-name",
  },
  {
    type: "descrição",
    value:
      "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
    class: "product-desc",
  },
];
function ProductCard() {
  return (
    <div className="product-card-container">
      {[...Array(4)].map((_, index) => (
        <div key={index}>
          {productArray.map((item, subIndex) => (
            <div
              key={subIndex}
              className={`${item.class} ${subIndex > 1 ? "hidden" : ""}`}
            >
              {item.type === "imagem" ? (
                <img src={item.value} alt="Imagem do produto" />
              ) : (
                `${item.value}`
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
