import "./Card.css";

import Proptypes from "prop-types";

function Card({ name, imgSrc, onClick }) {
  return (
    <button onClick={onClick} className="card">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </button>
  );
}

Card.propTypes = {
  name: Proptypes.string,
  imgSrc: Proptypes.string,
  onClick: Proptypes.func,
};

export default Card;
