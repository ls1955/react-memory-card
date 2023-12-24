import Card from "./Card";
import pokemonNames from "./pokemonNames";

import "./App.css";
import { useEffect, useState } from "react";

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

  const loadingText = <p>Loading...</p>;

  const cards = data.map(({ name, imgSrc }, i) => {
    const props = {
      name,
      imgSrc,
      pickedNames,
      setPickedNames,
      score,
      setScore,
      hiScore,
      setHiScore,
    };
    return <Card key={i} {...props} />;
  });
  const cardsContainer = <div className="cards-containers">{cards}</div>;

  const body = data.length === 0 ? loadingText : cardsContainer;

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
