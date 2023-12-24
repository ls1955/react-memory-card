import "./Card.css";

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
      setScore(0)
      setHiScore(Math.max(score, hiScore))
      setPickedNames([])
    } else {
      setScore(score + 1)
      setHiScore(Math.max(score + 1, hiScore))
      setPickedNames([...pickedNames, name])
    }
  }

  return (
    <button onClick={handleClick}>
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
    </button>
  );
}

export default Card;
