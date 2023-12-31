import "./App.css";
import { useEffect, useState } from "react";

import pokemonNames from "./pokemonNames";
import Card from "./Card";
import GameOverDialog from "./GameOverDialog";

import shuffle from "./arrayHelpers";

function App() {
  const [data, setData] = useState([]);
  const [pickedNames, setPickedNames] = useState([]);
  const [score, setScore] = useState(0);
  const [hiScore, setHiScore] = useState(0);

  useEffect(() => {
    const populateData = async () => {
      const promises = pokemonNames.map(async (name) => {
        try {
          const uri = `https://pokeapi.co/api/v2/pokemon-form/${name}/`;

          const data = await fetch(uri);
          const json = await data.json();

          return { name, imgSrc: json["sprites"]["front_default"] };
        } catch (error) {
          console.error(error);
        }
      });

      const newData = await Promise.all(promises);
      setData(newData);
    };

    populateData();
  }, []);

  const handleClick = (name) => {
    return () => {
      if (pickedNames.includes(name)) {
        setScore(0);
        setPickedNames([]);
      } else {
        setScore((prevScore) => {
          const newScore = prevScore + 1;
          if (newScore > hiScore) {
            setHiScore(newScore);
          }
          return newScore;
        });
        setPickedNames([...pickedNames, name]);
      }
    };
  };

  const cards = data.map(({ name, imgSrc }, i) => {
    return (
      <Card key={i} name={name} imgSrc={imgSrc} onClick={handleClick(name)} />
    );
  });
  const cardsContainer = <div id="cards-container">{shuffle(cards)}</div>;

  let body = null;
  if (cards.length === 0) {
    body = <p>Loading...</p>;
  } else if (score !== cards.length) {
    body = cardsContainer;
  } else {
    body = <GameOverDialog />;
  }

  return (
    <>
      <header>
        <div>
          <h1>React memory game</h1>
          <p>Beat the game by picking all cards without repeating once.</p>
        </div>
        <div>
          <p>Hi-score: {hiScore}</p>
          <p>Score: {score}</p>
        </div>
      </header>
      {body}
    </>
  );
}

export default App;
