import "./Card.css";

function Card({ imgSrc, name }) {
  return (
    <div>
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </div>
  );
}

export default Card;
