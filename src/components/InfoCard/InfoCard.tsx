import bannerCard from "../../assets/bannerCard.png";
import "./infocard.css";

function InfoCard() {
  return (
    <div className="card-container">
      <div className="text-card-container">
        <h1 title="title-card">Lorem Ipsum</h1>
        <p className="text-card">
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
      <img className="banner-grid" src={bannerCard} alt="" />
     
    </div>
  );
}

export default InfoCard;
