import Card from "./Card";
import pokemonNames from "./pokemon_names";

import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const promises = pokemonNames.map(async (name, i) => {
        try {
          const uri = `https://pokeapi.co/api/v2/pokemon-form/${name}/`;

          const data = await fetch(uri);
          const json = await data.json();
          const spriteUrl = json["sprites"]["front_default"];

          return <Card key={i} imgSrc={spriteUrl} text={name} />;
        } catch (error) {
          console.error(error);
        }
      });

      const newCards = await Promise.all(promises);
      console.log(newCards)
      setCards(newCards);
    };

    fetchData();
  }, []);

  const cardsContainer = <div className="cards-containers">{cards}</div>;

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
      {/* {cards.length === 0 ? "loading" : {cardsContainer}} */}
      {cardsContainer}
    </>
  );
}

export default App;
