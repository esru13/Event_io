import "./card.css";

function Card({ title1, title2, description, img, position }) {
  return (
    <div className="card-container hover:scale-105 cursor-pointer transition-all duration-300">
      <h3 className={`${!position ? "hidden" : ""} card-title text-black`}>
        {title1} <span className="purple-word">{title2}</span>
      </h3>
      <p className={`${!position ? "hidden" : ""}`}>{description}</p>
      <img src={img} alt="Screen Shoot" className="card-img" />
      <h3 className={`${position ? "hidden" : ""} card-title text-black`}>
        {title1} <span className="purple-word">{title2}</span>
      </h3>
      <p className={`${position ? "hidden" : ""}`}>{description}</p>
    </div>
  );
}

export default Card;
