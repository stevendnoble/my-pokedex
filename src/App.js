import { useState } from 'react';
import { Search } from './Search';
import { PokemonDetail } from './PokemonDetail';
import { Pokedex } from './Pokedex';
import './App.css';

export function App() {
  const [pokemon, setPokemon] = useState(null);
  const [capturedPokemons, setCapturedPokemons] = useState([]);

  const fetchPokemon = query => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error('Error:', error));
  };

  const capturePokemon = pokemon => {
    if (!capturedPokemons.find(p => p.name === pokemon.name)) {
      setCapturedPokemons(prev => [...prev, pokemon]);
    }
  };

  return (
    <div className="App">
      <Search onSearch={fetchPokemon} />
      {pokemon && <PokemonDetail pokemon={pokemon} onCapture={capturePokemon} />}
      <Pokedex capturedPokemons={capturedPokemons} />
    </div>
  );
}
