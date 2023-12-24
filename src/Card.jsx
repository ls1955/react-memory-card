import "./Card.css";

import Proptypes from "prop-types";

function Card({
  name,
  imgSrc,
  pickedNames,
  setPickedNames,
  score,
  setScore,
  hiScore,
  setHiScore,
}) {
  const handleClick = () => {
    if (pickedNames.includes(name)) {
      setScore(0);
      setHiScore(Math.max(score, hiScore));
      setPickedNames([]);
    } else {
      setScore(score + 1);
      setHiScore(Math.max(score + 1, hiScore));
      setPickedNames([...pickedNames, name]);
    }
  };

  return (
    <button onClick={handleClick} className="card">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </button>
  );
}

Card.propTypes = {
  name: Proptypes.string,
  imgSrc: Proptypes.string,
  pickedNames: Proptypes.array,
  setPickedNames: Proptypes.func,
  score: Proptypes.number,
  setScore: Proptypes.func,
  hiScore: Proptypes.number,
  setHiScore: Proptypes.func,
};

export default Card;
