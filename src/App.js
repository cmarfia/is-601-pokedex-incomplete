import { useState } from "react";
import PokedexList from "./PokedexList";
import PokemonList from "./PokemonList";

function App() {
  const [selectedPokedex, setSelectedPokedex] = useState(null);
  const [selectedPokemon, setSelectedPokmon] = useState(null);

  function newPokedex(pokedexName) {
    setSelectedPokedex(pokedexName);
  }
  
  function newPokemonName(PokemonName) {
    setSelectedPokmon(PokemonName);
  }
  
  if (selectedPokedex === null) {
    return <PokedexList newPokedex={newPokedex} />;
  }
  if (selectedPokemon == null) {
    return <PokemonList newPokemon={newPokemonName } pokedexName ={selectedPokedex}/>;
  }

  return (
    <div className="App">
      This text will render when you have successfully implemented all the 5
      different TODOs.
    </div>
  );
}

export default App;
