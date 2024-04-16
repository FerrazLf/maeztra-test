import bannerCard from "../../assets/bannerCard.png";
import bannerCardMobile from "../../assets/bannerCardMobile.png";
import "./infocard.css";

function InfoCard() {
  return (
    <div className="info-card__container">
      <div className="info-card__text">
        <h1 title="info-card__title">Lorem Ipsum</h1>
        <p className="info-card__title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </div>
      <picture className="info-card__image">
        <source media="(max-width: 767px)" srcSet={bannerCardMobile} />
        <source media="(min-width: 768px)" srcSet={bannerCard} />
        <img src={bannerCard} alt="Banner" />
      </picture>
    </div>
  );
}

export default InfoCard;
