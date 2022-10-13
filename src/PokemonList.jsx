import React, { useState, useEffect } from "react";
import { Pokedex } from "pokeapi-js-wrapper";

function PokemonList(props) {
  const { newPokemon, pokedexName } = props;

  const [hasError, setErrors] = useState(null);
  const [pokemon, setPokemon] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        try {
          // type should be { next: string; previous: string | null, results: Pokedex[]}
          const pokedex = await new Pokedex().getPokedexByName(pokedexName);
          setPokemon(pokedex.pokemon_entries);
        } catch (error) {
          setErrors(error);
        }
      }
      fetchData();
    },
    [pokedexName]
  );

  if (hasError !== null) {
    return <p>An error has occurred.</p>;
  }

  function renderPokdex() {
    return pokemon.map((pokemonData) => {
      const {
        pokemon_species: { name },
      } = pokemonData;

      return (
        <li>
          {name} <button onClick={() => newPokemon(name)}>View</button>
        </li>
      );
    });
  }

  return <ul>{renderPokdex()}</ul>;
}

export default PokemonList;
