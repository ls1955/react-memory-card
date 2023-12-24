import "./Card.css";

export default function Card({ name, imgSrc }) {
  return (
    <button>
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </button>
  );
}
