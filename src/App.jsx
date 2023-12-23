// import Card from "./Card";
import pokemonNames from "./pokemon_names";

import "./App.css";
import { useEffect } from "react";

function App() {
  const cards = [];

  useEffect(() => {
    for (const name of pokemonNames) {
      console.log(`https://pokeapi.co/api/v2/pokemon-form/${name}/`)
      fetch(`https://pokeapi.co/api/v2/pokemon-form/${name}/`)
      .then((data) => data.json())
      .then(json => console.log(json["sprites"]["front_default"]))
      .catch(error => console.error(error))
    }
  }, []);

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
      <div id="cards-container">{cards}</div>
    </>
  );
}

export default App;
