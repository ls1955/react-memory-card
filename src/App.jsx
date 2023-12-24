import Card from "./Card";
import pokemonNames from "./pokemon_names";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

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
    return <Card key={i} name={name} imgSrc={imgSrc} />;
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
          <p>Hi-score: 0</p>
          <p>Score: 0</p>
        </div>
      </header>
      {body}
    </>
  );
}

export default App;
