import React, { useState, useEffect } from "react";
import { Pokedex } from "pokeapi-js-wrapper";

function PokemonDetails(props) {
  const { pokemonName } = props;

  const [hasError, setErrors] = useState(null);
  const [pokemon, setPokemon] = useState(null);

  useEffect(
    function () {
      async function fetchData() {
        try {
          // type should be { next: string; previous: string | null, results: Pokedex[]}
          const p = await new Pokedex().getPokemonByName(pokemonName);
          setPokemon(p);
        } catch (error) {
          setErrors(error);
        }
      }
      fetchData();
    },
    [pokemonName]
  );

  if (hasError !== null) {
    return <p>An error has occurred.</p>;
  }

  function renderAbilities() {
    return pokemon.abilities.map(({ ability }) => {
      return <li key={ability.name}>{ability.name}</li>;
    });
  }

  function renderTypes() {
    // TODO
    return pokemon.types.map(({ type }) => {
      return <li key={type.name}>{type.name}</li>;
    });
  }

  function renderStats() {
    return pokemon.stats.map(({ stat, base_stat }) => {
      return (
        <li key={stat.name}>
          <strong>{stat.name}:</strong> {base_stat}
        </li>
      );
    });
    return null;
  }

  function renderPokemonDetails() {
    return (
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} />
        <h3>Abilities</h3>
        <ul>{renderAbilities()}</ul>
        <h3>Types</h3>
        <ul>{renderTypes()}</ul>
        <h3>Stats</h3>
        <ul>{renderStats()}</ul>
      </div>
    );
  }

  return pokemon === null ? null : renderPokemonDetails();
}

export default PokemonDetails;
