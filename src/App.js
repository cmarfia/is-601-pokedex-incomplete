import { useState } from "react";
import PokedexList from "./PokedexList";
import PokemonList from "./PokemonList";
import PokemonDetails from "./Pokemondetails";

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

  return <PokemonDetails pokemonName={selectedPokemon} />;
}

export default App;
